/*
  Instead of letting the user enter the text manually, we can get it from a 
  text file, in this case a text file we have in the directory.
*/

// We need a variable that can store out text
let txt;

// We want to be sure that we have loaded the whole text file,
// before we start working with it, so we use the built in function preload()
/* function preload() {
  txt = loadStrings('./two_cities.txt');
} */

// We want to load the text, when the user push a button on the page
// Function to load the file and when the file is loaded we run the function
// fileLoaded
loadFile = () => loadStrings('two_cities.txt', fileLoaded);

// When the file is loaded we use this function to display it on the page
fileLoaded = data => createP(join(data, '<br />'));

// Function to handle a user file upload
fileSelected = file => {
  // We only want text files
  if (file.type != 'text') {
    createP('Please upload a text file');
  } else {
    createP(file.data);
  }

  console.log(file);
};

function setup() {
  // No need for canvas
  noCanvas();
  // Variable to store the button
  const button = select('#loadTxt');
  // Run loadFile function when the button is pressed
  button.mousePressed(loadFile);

  // If we want the user to be able to upload a file we can use, we can
  // can create a field on the page and run a function when a file is selected
  createFileInput(fileSelected);
  //console.log(txt);
}
