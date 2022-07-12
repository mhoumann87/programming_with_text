// Global variables to store the elements on the page
let input, output, submit;

function setup() {
  // No need for a canvas
  noCanvas();

  // Connect the elements to the variables
  input = select('#input');
  output = select('#output');
  submit = select('#submit');
  // Add an eventlistener to the submit button
  submit.mousePressed(handleText);
}

const handleText = () => {
  // Get the input from the user
  const str = input.value();
  // Split the string into an array, the delimiter is anything not a word or number
  const words = str.split(/(\W+)/);
  console.log(words);

  // Get all the words and attach a span to them
  for (let i = 0; i < words.length; i++) {
    const span = createSpan(words[i]);
    span.parent(output);

    if (!/\W+/.test(words[i])) {
      span.mouseOver(highlight);
    }
  }

  console.log(words);
};

const highlight = () => {
  console.log(this);
};
