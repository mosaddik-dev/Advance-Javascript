//1->  Count Duplicate
/**
// input
const language = [
  "Javascript",
  "Python",
  "C",
  "Javascript",
  "HTML",
  "Javascript",
  "C",
  "Python",
];

function countDuplicates(array) {
  const output = {};

  // logic here...
  array.map((e) => {
    // map na diye forEach o use korte pari.
    output[e] = (output[e] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(language));

//  Another Method
const result = language.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(result);
 */

//2->  Reverse Word
/**
const str = "I Love Bangladesh";

function reverseWords(string) {
  const stringAsArray = string.split(" ");

  const result = stringAsArray.map((e) => {
    return e.split("").reverse().join("");
  });
  return result.join(" ");
}

console.log(reverseWords(str));
 */

//3->  sorting words by length in a sentence by asc order
/**
const str = "Java is a programming language";

function sortWordsByLength(words) {
  const wordAsArray = words.split(" ");

  wordAsArray.sort((a, b) => {
    return a.length - b.length;
  });

  console.log(wordAsArray.join(" "));
  return;
}

console.log(sortWordsByLength(str));
 */
