/**
// 1-> Remove falsy values from any array
const array = ["Mosaddik", null, undefined, "", NaN, 0, "Sadique", false];
console.log(array.filter(Boolean));
 */

/**
// 2-> Convert any value to Boolean
// using !! in front of any value
console.log(!!"Sakib");
console.log(!!0);
console.log(Boolean("Sakib")); // etaw kora jay. tobe etar short form hocche uporer ta
 */

/**
// 3-> Resizing any array
let element = ["A", "B", "C", "D", "E", "F"];
// we can use array's length property
element.length = 3;

console.log(element);
 */

/**
// 4-> short condition
const captain = "Mashrafi";

if (captain === "Mashrafi") {
  console.log("Our Captain!");
}

// we can use &&
captain === "Mashrafi" && console.log("Our Captain!");
 */

/**

// 5-> Perfomance checking
const startTime = performance.now();

for (let i = 0; i < 50; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} millisecond to finish`);
 */

//______________________
/**

// 6-> Swaping values in Array
let array = [1, 2, 3, 4, 5];

// method 1 - temp var
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// method 2 - one line
[array[0], array[4]] = [array[4], array[0]];
console.log(array);

// 7-> Swaping value in variable
let a = 10;
let b = 20;

// [a, b] = [b, a];

// using math to swap value - [complex]
b = a + (a = b) - b;

console.log(a, b);
 */

/**
 

// 8-> Remove Duplicate from array
const array = [1, 2, 3, 3, 3, 4, 4, 5, 6, 6, 6];
console.log(array);

const removeDup = [...new Set(array)];
console.log(removeDup);
 */

/**
 // 9-> compare two arrays by value

const hasSameElements = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];

console.log(hasSameElements(array1, array2));
 */

/**
// 10-> Shuffling Array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.sort(() => Math.random() - 0.5);
console.log(array);
 */

/**
// 11-> comma Operator
let x = 1;
x = (x++, x);

console.log(x);
 */
