// sum the unique item in sorted array
// expect time complexity: O(n)

function uniqueSum(arr) {
  // set max = arr[arr.length - 1]
  const maxNumInArray = arr[arr.length - 1]
  // set i = 0 and j = next to i
  let i = 0
  let j = 1

  // loop if arr[i] !== max
  while (arr[i] !== maxNumInArray) {
    // if i = j
    if (arr[i] === arr[j]) {
      // move j to the next one
      j++
    } else if (arr[i] !== arr[j]) { // if i != j
      // move i to the next one
      i++
      // set arr[i] to j
      arr[i] = arr[j]
      // set j to i + 1
      j = i + 1
    }
  }
  
  return arr.slice(0, i + 1).reduce((prev, acc) => prev + acc)
}
    
uniqueSum([1,2,3,4,3,3,4])