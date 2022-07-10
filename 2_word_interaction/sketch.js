// Global variables to store the elements on the page
let input, output, submit;

function setup() {
  // No need for a canvas
  noCanvas();

  // Connect the elements to the variables
  input = select("#input");
  output = select("#output");
  submit = select("#submit");

  // Add an eventlistener to the submit button
  submit.mousePressed(handleText);
}

const handleText = () => {
  // Get the input from the user
  const str = input.value();
  // Split the string into an array, the delimiter is anything not a word or number
  const words = str.split(/(\W+)/);
  console.log(words);
  // Create a string with for all the words
  let html = "";
  // Create a HTML element (span) for each work
  words.forEach((word) => {
    if (/\W+/.test(word)) {
      html += `${word}`;
    } else {
      html += `<span class="bg">${word}</span>`;
    }
  });

  // Print the text on the page
  output.html(html);

  console.log(words);
};
