// count unique value
// expect time complexity: O(n)
// expect space complexity: O(1)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  // set count to 0
  let count = 0;
  // set i to 0
  let i = 0;
  // set j to i + 1
  let j = i + 1;

  // loop if i < arr.length - 1 && j < arr.length
  while (i < arr.length) {
    // set flag to false
    let flag = false;

    // if i != j
    if (arr[i] === arr[j]) {
      flag = true;
    }

    if (!flag) {
      count++;
    }

    i++;
    j++;
  }

  return count;
}

countUniqueValues([1, 2, 4, 4, 4]);
