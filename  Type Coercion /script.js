let n = String(1000);
console.log(typeof n); //'string'
console.log(n);

let b = String(true);
console.log(typeof b); //'string'
console.log(b); //'string'

let f = String(function () {});
console.log(typeof f); //'string'
console.log(f);

let o = String({});
console.log(typeof o); //'string'
console.log(o);

let a = String([]);
console.log(typeof a); //'string'
console.log(a);

console.log(2 + 3 + "Hello" + 12); //'5Hello12'

String(123); // '123'
String(-123); // '-123'
String(true); // 'true'
String(false); // 'false'
String(null); // 'null'
String(undefined); // 'undefined'

Boolean(2); // explicit
if (2) {
} // implicit

Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(undefined); // false
Boolean(false); // false
Boolean(null); // false

Boolean("Hello"); // true
