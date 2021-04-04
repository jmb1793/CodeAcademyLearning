//Declare an array of strings for the secret message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//Determine the length and remove last element, check length again
console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage.length)

//Use array method to append new strings onto the end of the array
secretMessage.push('to','Program')

//replace the word 'easily' with the word 'right'
secretMessage[secretMessage.indexOf('easily')] = 'right'

//Remove the first word with an array method
secretMessage.shift()

//Add a new word at the beginning of the array
secretMessage.unshift('Programming')

//use array method to remove the strings 'get, right, the, first, time,' and replace it with the word 'know'

let indexStart =secretMessage.indexOf('get');
let indexDifference = secretMessage.indexOf('time') - indexStart;
secretMessage.splice(indexStart,indexDifference, 'know');

console.log(secretMessage.join(' '))