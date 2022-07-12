let input, output, submit;

function setup() {
  // no need for a canvas
  noCanvas();

  // Connect the variables to the elements on the page
  input = select('#input');
  output = select('#output');
  submit = select('#submit');

  // Add an eventlistener for submit button being pressed
  submit.mousePressed(handleText);
}

const handleText = () => {
  output.html(input.value());
};
