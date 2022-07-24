/*
 * Simple word counting algorithm
 */
// Global variables for the elements on the page
let output;
// Set a global variable for the text
let txt;
// This don't need to ba a global variable, but if we want to use it in the
// console, we do it anyway. An empty object
const wordCounts = {};
// We make a global array of all the keys we can iterate over
const keyWords = [];

function preload() {
  // Preload the text, and store it in the variable
  txt = loadStrings('./test.txt');
}

function setup() {
  // we don't need a canvas right now
  noCanvas();

  // Connect the elements on the page to the variables
  output = select('#output');

  // We now have an array of strings, we need to join them together,
  const allWords = txt.join('\n');

  // so we can split them up in to words
  const wordTokens = allWords.split(/[_\W]+/);

  // Look at every word in the array
  for (let i = 0; i < wordTokens.length; i++) {
    // We don't want to count both uppercase and lowercase version of a word
    const word = wordTokens[i].toLowerCase();

    // We don't want to count all the numbers, so we "weed" them out
    if (!/\d+/.test(word)) {
      // is it a new word (it is not in the object)
      if (wordCounts[word] === undefined) {
        // ad the word to the object with a count of 1
        wordCounts[word] = 1;
        // Also add the word to the keys array
        keyWords.push(word);
      } else {
        // The word are already in the object, so we just increase the count by one
        wordCounts[word] = wordCounts[word] + 1;
      }
    }
  }

  // Function to compare and sort by the time the word is used in the text
  const compare = (a, b) => {
    const countA = wordCounts[a];
    const countB = wordCounts[b];

    return countB - countA;
  };

  // Now we can sort the keyWords array using a function
  keyWords.sort(compare);

  // Variable for the output html
  let html;
  // And we can shoe a list of all the words on the page
  keyWords.forEach(word => {
    html += `<p>${word} ${wordCounts[word]}`;
  });

  output.html(html);
}
