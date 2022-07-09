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
  output.html(input.value());
};
