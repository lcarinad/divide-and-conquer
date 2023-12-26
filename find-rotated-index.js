function findRotatedIndex(arr, target) {
  let pivotInd = findPivot(arr);

  if (pivotInd > 0 && target >= arr[0] && target <= arr[pivotInd - 1]) {
    return binarySearch(arr, target, 0, pivotInd - 1);
  } else {
    return binarySearch(arr, target, pivotInd, arr.length - 1);
  }
}

function binarySearch(arr, target, low, high) {
  console.log(`here i am`);
  if (arr.length === 0) return -1;
  if (target < arr[low] || target > arr[high]) return -1;
  while (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr, low = 0, high = arr.length - 1) {
  //check if array has one index in it or there's not pivot point which means arr[0] is smaller than the last element
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

  while (high >= low) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
//a pivoted index is the index at which the array has been rotated.  its the index at which the og array would have been split into two parts and then these parts were swapped
