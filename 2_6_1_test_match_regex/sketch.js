// Create global variables
let text_field, output, submit;

function setup() {
  // No need for a canvas
  noCanvas();
  // Use the global variables to connect to the elements on the page
  text_field = select('#text-field');
  output = select('#output');
  submit = select('#submit');
  // Setup an eventlistener for the submit button
  submit.mousePressed(checkMail);
}

const checkMail = () => {
  // The variable str holds the input from the user
  const str = text_field.value();
  // We make a regex that test for a valid email
  const regex = /\w+@\w+\.(net|com|org)/;
  // Show if the email is valid in the output field

  // The test function where gives back true or false
  // const res = regex.test(str);
  // output.html(`The email ${str} is ${res}`);

  // The match() function where you get an array back with the matched values
  // And you get nothing back if it is false
  const res = str.match(regex);
  console.log(res);
  if (!res) {
    output.html(`The email address ${str} is invalid`);
  } else {
    output.html(`The email address ${res[0]} is valid`);
  }
};
