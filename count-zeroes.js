module.exports = countZeroes;

function countZeroes(arr) {
  let begIdx = 0;
  let endIdx = arr.length - 1;
  if (arr[endIdx] === 1) {
    return 0;
  } else if (arr[begIdx] === 0) {
    return arr.length;
  } else {
    while (begIdx <= endIdx) {
      let midIdx = Math.floor((begIdx + endIdx) / 2);
      let midVal = arr[midIdx];
      if (midVal === 1) {
        begIdx = midIdx + 1;
      } else if (midVal === 0) {
        endIdx = midIdx - 1;
      }
    }
    return arr.length - begIdx;
  }
}

// Index:  0  1  2  3  4  5
// Array: [1, 1, 1, 1, 0, 0]

// 1st iteration:
//    begIdx midIdx    endIdx
//       |     |        |
//      [1, 1, 1, 1, 0, 0]

// 2nd iteration:
//              beg mid end
//                |  |  |
//      [1, 1, 1, 1, 0, 0]

// 3rd iteration (loop terminates):
//               end beg
//                |  |
//      [1, 1, 1, 1, 0, 0]

// Initial state:
// begIdx = 0
// endIdx = 5

// First iteration
// midIdx = 2, midVal = 1 (since arr[midIdx] === 1)

// Update begIdx to midIdx + 1 = 3
// Second iteration:
// midIdx = 4, midVal = 0 (since arr[midIdx] === 0)
// Update endIdx to midIdx - 1 = 3

// Third iteration:
// begIdx is now greater than endIdx, so the while loop terminates.

// Calculate the number of zeros:
// return arr.length - begIdx = 6 - 4 = 2
