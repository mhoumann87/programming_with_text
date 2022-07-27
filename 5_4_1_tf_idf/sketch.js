/*
  tf-idf read more on wikipedia https://en.wikipedia.org/wiki/Tf%E2%80%93idf
  based on the coding train video https://youtu.be/RPMYV-eb6lI

  The td-idf stands for  term frequency–inverse document frequency. It is a word counting algorithm
  but instead of just counting the words (how many times does a term show up in a text), hold up against the
  frequency af a word in other documents. 
  
  First we count the words in a document, then we compare this count with other documents, and if a word
  is frequent in these as well, the word gets a low score.
  
  It is a way to find keywords that are "unique" for this document.

*/

// Variables for the elements on the page
let upload, submit, output;
// A variable for oor text files
let txt = [];
// A variable for our words in the text as an object
let wordCounts = {};
// An array for all the keys in wordCounts
let keys = [];
// An array for the joined strings
let allWords = [];

// An array of files we use for reference
const files = [
  'files/eclipse.txt',
  'files/fish.txt',
  'files/rainbow.txt',
  'files/sports.txt',
];

// We preload the files we want to compare up against
function preload() {
  // As we have an array we have to go over every file in there
  for (let i = 0; i < files.length; i++) {
    txt[i] = loadStrings(files[i]);
  }
}

function setup() {
  // No use for a canvas
  noCanvas();

  // Join the strings in the txt array
  for (let i = 0; i < txt.length; i++) {
    // Join the strings at line ends
    allWords[i] = txt[i].join('\n');
  }

  // Connect the variables to the elements on the page
  upload = select('#upload');
  submit = select('#submit');
  output = select('#output');

  // Add an eventlistener to the button
  submit.mousePressed(handleFile);
}

const handleFile = () => {
  console.log('pushed');
  file = loadStrings();
};
