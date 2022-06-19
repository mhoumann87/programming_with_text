/* 
  A simple P%js sketch that takes the input from the user, and reverse 
  and show it back to the user.

  Made as part of the Coding Train's Programming with Text playlist first video, 
  Getting Text From The User 

  
*/

// Variables to store the elements on the page
let userInput, submit;

function setup() {
  // We don't use the canvas for this project
  noCanvas();
  // Get the elements from the page and store them in the variables
  userInput = select('#userInput');
  submit = select('#submit');

  // When the user press the button, we run the function reverseText()
  submit.mousePressed(reverseText);
}

reverseText = () => {
  // Save user input in a string
  const textStr = userInput.value();
  // Change the string to an array
  const inputArray = textStr.split(' ');
  // Save a string with the user text reversed
  const reverseText = inputArray.reverse().join(' ');
  // Create a paragraph and display the reversed text
  createP(reverseText);
};
