//Whale translator
//Takes an input string, and returns whale translation
//There are no consonants in whale talk, except for 'y'
//u's and e's are extra long (double them in output)

let input = 'The whale language is beautiful';

//Array of the avaiable vowels in whale talk
const vowels = ['a','i','u','o','e'];

//Output of the translator
let resultArray = []

for(let i = 0; i < input.length; i++){
  for(j = 0; j < vowels.length; j++){
    if(input[i].toLowerCase() === vowels[j]){
      resultArray.push(input[i])
    }
  }
      if(input[i].toLowerCase() === 'e'){
      resultArray.push(input[i])
    }
    if(input[i].toLowerCase()==='u'){
      resultArray.push(input[i])
}}
let translatedInput = resultArray.join('').toUpperCase()
console.log(translatedInput)