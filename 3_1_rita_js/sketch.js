let input, output, submit;
// Setup a global variable for the RiTa lexicon
let lexicon;

function setup() {
  // no need for a canvas
  noCanvas();

  // Connect the variables to the elements on the page
  input = select('#input');
  output = select('#output');
  submit = select('#submit');

  // Add an eventlistener for submit button being pressed
  submit.mousePressed(handleText);
  // Store a new instance of the lexicon in the variable
  lexicon = new RiLexicon();
}

const handleText = () => {
  // get the input from the user and save it in a variable
  const str = input.value();
  // Change the string to a new RiTa string
  const ritaStr = new RiString(str);
  // Create an array with the words from the string
  const tokens = ritaStr.words();
  // Create an array with the RiTa part of speech info
  const pos = ritaStr.pos();
  console.log(pos);

  let html = '';

  for (let i = 0; i < tokens.length; i++) {
    // If we have a noun, then we change it with another noun from the lexicon,
    // and we have to test to see if it is a plural or singular noun
    if (/nn.*/.test(pos[i])) {
      tokens[i] = lexicon.randomWord(pos[i]);
    }
    // If it is the first work or it is a punctuation token we don't add a space in front
    if (i === 0 || /\W+/.test(tokens[i])) {
      html += `${tokens[i]}`;
    } else {
      // Else we do
      html += ` ${tokens[i]}`;
    }
  }
  // Display the result on the page
  output.html(html);
};
