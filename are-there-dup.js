// check is there any duplicates
// expect time complexity: O(n)
// expect space complexity: O(1)

function areThereDuplicates() {
  return new Set(arguments).size === arguments.length
}

areThereDuplicates('a', 'b', 'c')