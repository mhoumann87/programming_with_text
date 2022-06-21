/*
  Part of Programming with Text 
*/

// We need some variables to store our elements
let textField, output, submit;

function setup() {
  // We don't need the canvas
  noCanvas();

  // Get the elements on the page and store them in the variables
  textField = select('#textField');
  output = select('#output');
  submit = select('#submit');

  // When the button is pressed, run the function newText
  submit.mousePressed(newText);
}

// Function to handle the text we get from the user
newText = () => {
  // Variable to store our string
  const str = textField.value().toLowerCase();
  // Display the text back to the user in the paragraph on the page
  output.html(str);
  // Display the length of the string
  createP(`The length of this text is ${str.length}`);
  // Use indexOf() to find the index of a set work
  const index = str.indexOf('this');
  // If the result of index = -1 the word this isn't in the input
  if (index === -1) {
    createP('The word "this" is not in the text');
  } else {
    createP(`The word "this" is at index ${index}`);
  }
  // Display the substring of index 5 to 7
  createP(`The substring(5, 7) is: ${str.substring(5, 7)}`);

  // We ude the p5ja split() function to create an array of all the words
  const words = split(str, ' ');
  // Display a count of the words in the text
  createP(`There are ${words.length} words in the text.`);
  // Shoe a list of every word
  createP('And they are:');
  for (let i = 0; i < words.length; i++) {
    createP(words[i]);
  }
  // No example for this, but if you have a text with grammatical characters
  // and you don't want them in your array, and you don't want to use regex
  // you can use the p5 function splitTokens()
  // https://p5js.org/reference/#/p5/splitTokens

  // Alphabetize the words in the array, and put it back in an string and display it
  const sortedWords = words.sort();
  const str2 = join(sortedWords, ' ');
  createP('The words in the text alphabetized:');
  createP(str2);
};
