// 1->  nicher code e output ki hobe?
/**
console.log([] + []);

console.log({} + []);

console.log(true + 5);

console.log(false + true);
 */

// 2->  nicher code e output ki hobe?
/**
function myFunction(str) {
  return str || "Bangladesh";
}

const string = myFunction`Hello `;

// console.log(string);

// tagged template literals

function modifier(strings, ...values) {
  console.log(strings, values);
}

let player1 = "Mosaddik";
let player2 = "Sadique";

console.log(modifier`We have ${player1} and ${player2} in our cricket team`);
 */

// 3-> je kono website er text content editable kivabe korbo?
/**
document.body.contentEditable = true;
// eta amra console e likhe dite pari
 */

// 4-> nicher code e output ki hobe?
/**
const a = "constructor";
console.log(a[a](1)); // etar mane hocche String(1)
 */

// 5-> nicher code e output ki hobe?
/**
console.log(0.1 + 0.2);
 */

// 6-> nicher code e output ki hobe?
/**
console.log("Bangladesh".__proto__.__proto__.__proto__);
 */

// 7-> Debounce Function in JavaScript
const button = document.getElementById("button");

button.addEventListener(
  "click",
  debounce(() => {
    console.log("clicked");
  }, 500)
);

function debounce(fn, delay) {
  let timeOutId;
  return function () {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}
