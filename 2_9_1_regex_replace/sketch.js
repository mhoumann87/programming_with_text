// Global variables to hold the elements on the page
let input, output, submit;

function setup() {
  // No need for canvas
  noCanvas();

  // Connect the variables to the elements
  input = select("#input");
  output = select("#output");
  submit = select("#submit");

  // Add an eventlistener to the button
  submit.mousePressed(replaceWords);
}

const replaceWords = () => {
  // Get user input
  const str = input.value();
  // Make the regex to get every word in the document
  const regex = /\b\w+\b/g;

  // Go through the string and make a new string of the words that have been replaces
  const newStr = str.replace(regex, changeColor);

  // SHow the new string on the page
  output.html(newStr);
};

const changeColor = (match) => {
  // If the word we are checking have 4 letters, we highlight the word
  if (match.length === 4) {
    return `<span class="hl">${match}</span>`;
  } else {
    return match;
  }
};
