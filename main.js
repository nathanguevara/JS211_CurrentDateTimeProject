// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// const { type } = require("mocha/lib/utils");


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const convertToString = () => {
let num = 66;
let convertedNum = num.toString();
document.getElementById("numToString").innerHTML = convertedNum;
}

// Write a JavaScript program to convert a string to the number.
const convertToNum = () => {
let stringToConvert = '10';
parseInt(stringToConvert);
console.log(parseInt(stringToConvert))
document.getElementById("stringToNum").innerHTML = parseInt(stringToConvert);
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
 const userData = 10;
 const isTypeOf = (data) => {
   return console.log(typeof data);
 }
 isTypeOf(userData);
 document.getElementById("dataType").innerHTML = typeof userData;
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1 ,num2) => {
  return num1 + num2;
}
document.getElementById("addTwoNum").innerhtml = addTwoNumbers();
// console.log(addTwoNumbers(5,9));

// Write a JavaScript program that runs only when 2 things are true.
const thingOne = 50;
const thingTwo = 1;

  if (thingOne && thingTwo) {
      console.log("Both are true")
    }

// Write a JavaScript program that runs when 1 of 2 things are true.
const thingThree = 20;
const thingFour = -0;

  if (thingThree || thingFour) {
      console.log("One is true")
    }


// Write a JavaScript program that runs when both things are not true.  
const thingFive = -0;
const thingSix = -0;

  if (!thingFive && !thingSix) {
      console.log("Both are false")
    }
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
