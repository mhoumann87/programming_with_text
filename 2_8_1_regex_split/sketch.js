// Variables to hold the elements on the page
let input, output, submit;

function setup() {
  // No need for canvas
  noCanvas();

  // Connect the elements to the variables
  input = select("#input");
  output = select("#output");
  submit = select("#submit");

  // Create an eventlistener for the button
  submit.mousePressed(splitStr);
}

const splitStr = () => {
  // put the input in to a string
  const str = input.value();
  // Create a regex to split the string, we want to split
  // by anything not a letter or a digit
  const regex = /\W+/;
  // Create an array of the words in the array
  const words = str.split(regex);
  console.log(words);
  // Print the array to the screen
  let html = `<ol>`;
  words.forEach((word) => {
    html += `<li>${word}</li>`;
  });
  html += `</ol>`;
  output.html(html);
};
