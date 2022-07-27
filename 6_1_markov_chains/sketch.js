/* 
  Read more about Markov Chains on wikipedia https://en.wikipedia.org/wiki/Markov_chain
  Based on the Programming with Text on the Coding Train's Youtube channel
  https://youtube.com/playlist?list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch

  This first sketch is all about character chains

*/

// We first need a text to "learn" from
const text =
  'The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead.';

// A global variable to hold the number of characters in a string
const order = 3;

// An object to hold the strings of characters
const ngrams = {};

function setup() {
  // No need for a canvas
  noCanvas();

  // We go through the base text, and take sections of 3 chars and put them in the object
  for (let i = 0; i < text.length - order + 1; i++) {
    const gram = text.substring(i, i + order);
    // Check to see if the "gram" are in the object
    if (!ngrams[gram]) {
      // If it not are in ngrams, add it with a count of one
      ngrams[gram] = 1;
    } else {
      // If we have it already increase the count
      ngrams[gram]++;
    }
  }
  console.log(ngrams);
}
