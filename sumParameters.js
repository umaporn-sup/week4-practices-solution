// Write a function sumParameters(...nums) that takes any number of parameters and returns their sum.
function sumParameters(...nums) {
  return nums.reduce((sum, num) => sum + num, 0)
}

console.log(sumParameters(1, 2, 3)) // 6
console.log(sumParameters(4, 5)) // 9
console.log(sumParameters()) // 0
