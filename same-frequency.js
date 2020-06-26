function sameFrequency(num1, num2) {
  const strNum1 = num1.toString()
  const strNum2 = num2.toString()

  const objNum1 = {}

  for (let str of strNum1) {
    objNum1[str] = objNum1[str] ? objNum1[str] + 1 : 1
  }

  for (let str of strNum2) {
    if (!objNum1[str]) {
      return false
    }

    objNum1[str] = objNum1[str] - 1
  }

  return true
}

console.log(sameFrequency(14, 41))