// Variables used to get and show elements on the page
let userText;
let output;

function setup() {
  // Disable the canvas
  noCanvas();
  // Create a input field on the page
  userText = createInput();
  // get ths output paragraph we put in the HTML
  output = select('#output');
  // When the user hits enter shoe the input in a paragraph
  userText.changed(newText);
  // As the user is typing, shoe the input in on the page
  userText.input(newTyping);
}

// Function to create a paragraph with the input
newText = () => {
  createP(userText.value());
};

// Show the input as the user is typing it
newTyping = () => {
  output.html(userText.value());
};
