/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  if(a > b){
    return a
  }else{
    return b
  }
};

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
  if( a > b && a > c){
    return
  }else if(b > a && b > c){
    return b
  }else{
    return c
  }
};


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/


isCharacterAVowel = (singleChar) => {
  vowelArray = ['a', 'e', 'i', 'o', 'u']

  for(let i = 0; i < vowelArray.length; i++){
    if(singleChar === vowelArray[i]){return true}
  }
  return false 
}; 

let singleChar = 'b'
isCharacterAVowel(singleChar); 

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

function sumArray(toBeAdded) {
  let sum = 0; 
  for(i = 0; i < toBeAdded.length; i++){
    sum += toBeAdded[i]; 
  }
  return sum; 
};


multArray = (toBeMult) => {
  let product = 1; 
  for(i = 0; i < toBeMult.length; i++){
    product *= toBeMult[i]; 
  }
  return product; 
};


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

numOfArgs = (...args) => { 
  return args.length 
};


/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

function reverseString(str) {
  let newString = "";

  for (let i = str.length -1; i >= 0; i--){
    newString += str[i]
  }

  return newString
};

reverseString("hello")

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let length = 0; 
  let longest; 

  for(let i = 0; i < arr.length; i++){

    if(arr[i].length > length){
      length = arr[i].length; 
      longest = arr[i]
    }
  }
  return(longest)
};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, i) => {

  let longerThan = []; 
  for(let a = 0; a < arr.length; a++){
    if (arr[a].length > i){
       longerThan += longerThan.push(arr[a])
    }
  }

  console.log(longerThan)
};

filterLongWords(["by", "hello", "short"], 4)

// Devin Im having problems getting filterLongWords ^^ to 
// appear in the console as an array. I get an 'Uncaught TypeError: longerThan.push is not a function' Error
//Any tips? 

