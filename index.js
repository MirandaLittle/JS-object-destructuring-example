'use strict';

// JS object destructuring

const user = {
  firstName: 'Mira',
  mail: 'mira@cles.nl',
  age: 34,
}

// Assigning key value to new variable
const userName = user.firstName // 'Mira'
const userMail = user.mail // 'mira@cles.nl'
const userAge = user.age // 34

console.log(`Name: ${userName}\nMail: ${userMail}\nAge: ${userAge}`);

// Using object desctructuring syntax
// Single value
const { firstName } = user; // 'Mira'

// Multiple values
const { mail, age } = user; // 'mira@cles.nl' 34

console.log(`Name: ${firstName}\nMail: ${mail}\nAge: ${age}`);