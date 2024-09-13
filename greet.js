// Write a function greet(name, greeting = 'Hello') that returns a greeting message. If no greeting is provided, it defaults to "Hello".
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`
}

console.log(greet('Alice')) // 'Hello, Alice!'
console.log(greet('Bob', 'Hi')) // 'Hi, Bob!'
console.log(greet('Charlie', 'Good morning')) // 'Good morning, Charlie!'
