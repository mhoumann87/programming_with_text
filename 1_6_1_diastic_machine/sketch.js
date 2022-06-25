/* 
  Chapter 1.5 in the Coding Trains Programming with Text.

  And also coding challenge #37
  https://www.youtube.com/watch?v=u-HUtrpyi1c&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=6
*/

// Variable to store the base text
let baseText;
// wa also need an array for out baseText split in to words
let words;
// We need a place to store out poem
let makePoem;

// To minimize the chance we get the same word again and again, we don't
// want to start from the beginning of the seed text, so we need a variable
// to keep track of the current word
let currentWord = 0;

// A function to "make the poem"
diastic = (seedPhrase, words) => {
  for (let i = 0; i < seedPhrase.length; i++) {
    // Find the character at a given index
    const c = seedPhrase.charAt(i);
    // Check the base text to find a word, with the same character at the same place
    for (let j = currentWord; j < words.length; j++) {
      if (words[j].charAt(i) == c) {
        // Add the word to the makePoem variable and add a
        // space in front of the word
        makePoem += ' ' + words[j];
        // Start the next search from the next word in the base text,
        // by updating the current word count
        currentWord = j + 1;
        break;
      }
    }
  }

  // If there are no word matching, it will return undefined, we do not want that
  // in out "poem", so we split the poem in an array
  let checkPoem = split(makePoem, ' ');
  // check every word and remove it if it is 'undefined', we move backwards
  // in the array to avoid errors by trying to remove an index, that's no longer
  // there.
  for (let i = checkPoem.length - 1; i >= 0; i--) {
    if (checkPoem[i] == 'undefined') {
      checkPoem.splice(i, 1);
    }
  }
  // Turn the array in to a string again
  // and send it back to the anonymous function
  makePoem = checkPoem.join(' ');
  return trim(makePoem);
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
  words = splitTokens(baseText, ',.!-"?();“\' ');
  // make every word in the array to lover case
  words = words.map(word => word.toLowerCase());
  // Get the elements on the page
  const seedPhrase = select('#seed-phrase');
  const btn = select('#submit');
  const output = select('#poem');
  // Set a p5 event listener on the button
  btn.mousePressed(() => {
    // Anonymous function to handle the seed phrase

    // Remove the spaces between the words in the seed phrase if there are any,
    // and make every work lower case
    const seedWord = seedPhrase.value().toLowerCase().replace(/\s+/g, '');
    console.log(seedWord);
    const poem = diastic(seedWord, words);
    //Display the poem on the page
    createP(poem);
  });
}
