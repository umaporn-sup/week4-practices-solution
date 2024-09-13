// Write a function increment(num, step = 1) that returns the number incremented by the specified step. If no step is provided, it defaults to 1.
function increment(num, step = 1) {
  return num + step
}

console.log(increment(5)) // 6
console.log(increment(5, 2)) // 7
console.log(increment(0, -1)) // -1
