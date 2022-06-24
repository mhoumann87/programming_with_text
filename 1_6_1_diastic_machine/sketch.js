/* 
  Chapter 1.5 in the Coding Trains Programming with Text.

  And also coding challenge #37
  https://www.youtube.com/watch?v=u-HUtrpyi1c&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=6
*/

// Variable to store the base text
let baseText;
// wa also need an array for out baseText split in to words
let words;

// A function to "make the poem"
diastic = (seedPhrase, words) => {
  for (let i = 0; i < seedPhrase.length; i++) {
    // Find the character at a given index
    const c = seedPhrase.charAt(i);
    console.log(c);
    // Check the base text to find a word, with the same character at the same place
    for (let j = 0; j < words.length; j++) {
      if (words[j].charAt(i) == c) {
        console.log(words[j]);
        break;
      }
    }
  }
};

// Load the supplied text
function preload() {
  baseText = loadStrings('alice.txt');
}

function setup() {
  // We have no need for a canvas
  noCanvas();
  // When the baseText is loaded, it is in an array and we need it to be a string
  // so we join the arrays with a space between.
  baseText = join(baseText, ' ');
  // Split the string into a new array, with spaces, commas, dots removed
  words = splitTokens(baseText, ',.!-"? ');
  // Get the elements on the page
  const seedPhrase = select('#seed-phrase');
  const btn = select('#submit');
  // Set a p5 event listener on the button
  btn.mousePressed(() => {
    // Anonymous function to handle the seed phrase
    // console.log(seedPhrase.value());
    // console.log(words);
    const poem = diastic(seedPhrase.value(), words);
  });
}
