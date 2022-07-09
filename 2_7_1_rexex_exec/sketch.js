// Variables to store elements on page
let input, output, submit;

function setup() {
  // No need for canvas
  noCanvas();

  // Connect the variables to the elements on the page
  input = select("#input");
  output = select("#output");
  submit = select("#submit");

  // Setup event listener for the submit button
  submit.mousePressed(checkMail);
}

const checkMail = () => {
  // Get info from input box
  const str = input.value();
  // Setup the regex
  const regex = /\w+@+\w+\.(net|org|com)/;
  // Check the input against the regex
  let result = regex.exec(str);
  console.log(result);
  while (result != null) {
    output.html(result);
    result = regex.exec(str);
  }
};
