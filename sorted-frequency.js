function sortedFrequency(arr, target) {
  if (target > arr[arr.length - 1]) {
    return -1;
  }
  let begIdx = findFirst(arr, target);
  let lastIdx = findLast(arr, target);
  let freqOfTarget = lastIdx + 1 - begIdx;
  return freqOfTarget;
}
function findFirst(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if (rightIdx >= leftIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    //✅if (midIdx is 1st element or midIdx === target) AND (val to left <- of mid is less than target) which means mid is the first occurence so return midIdx as first orrcurence
    if ((midIdx === 0 || target > arr[midIdx - 1]) && arr[midIdx] === target) {
      return midIdx;

      //if(target larger than mid val), reset lIdx to midIdx+1 to elimate left half of arr then return findFirst again until find 1st occurence
    } else if (target > arr[midIdx]) {
      leftIdx = midIdx + 1;
      return findFirst(arr, target, leftIdx, rightIdx);

      //else (target smaller than mid val), reset rIdx to midIdx-1 to eliminate right half of arr then return findFirst again until find 1st occurence.
    } else {
      rightIdx = midIdx - 1;
      return findFirst(arr, target, leftIdx, rightIdx);
    }
  }
}
function findLast(arr, target, leftIdx = 0, rightIdx = arr.length - 1) {
  if (rightIdx >= leftIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    //✅if(midIdx===target)&& midIdx+1>target || midIdx===arr.length, then return midIdx.  this is the last occurence
    if (
      (arr[midIdx + 1] > target || midIdx === arr.length - 1) &&
      arr[midIdx] === target
    ) {
      return midIdx;
    }
    //❌if(target > midVal), reset lIdx to midIdx+1 return findLast, eliminate left half of arr then return findLast
    else if (target >= arr[midIdx]) {
      leftIdx = midIdx + 1;
      return findLast(arr, target, leftIdx, rightIdx);
    }
    //❌if(target < midVal), reset RIdx to midIdx-1 return findList, eliminate right half of arr then return findLast
    else {
      rightIdx = midIdx - 1;
      return findLast(arr, target, leftIdx, rightIdx);
    }
  }
}
