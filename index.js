// let name = 'Bryant'

// console.log(name)

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

// let firstName = 'Bryant'

// let interestRate = 0.3
// const interestRate = 0.3
// interestRate = 1 // Will cause an error

// Primitives
// let name = 'Bryant' // String Literal
// let age = 30 // Number Literal
// let isApproved = true // Boolean Literal
// let firstName = undefined // Not common
// let selectedColor = null // Clears the value of a variable

// Dynamic
// let name = 'Bryant'
// let age = 38
// let isApproved = true
// let firstName = undefined
// let selectedColor = null

// Reference Types

// let person = {
//   name: 'Bryant',
//   age: 38
// }
// Dot Notation
// person.name = 'Richards'

// Bracket Notation
// let selection = 'name'
// person[selection] = 'The Guy'
//
// console.log(person.name)


// let selectedColors = ['red', 'blue', 'green', 'black', 'purple']
// selectedColors[2] = 'white'
// console.log(selectedColors.length)
// console.log(selectedColors[3])

function greet(name, lastName) {
  console.log('Hello World ' + name + ' ' + lastName)
}

greet('Bryant', 'Richards')
