// Sumit Saha's Code
// function add(x) {
//   return 10 + x;
// }

// // higher order function
// const memo = (func) => {
//   let cache = {};

//   console.log("cache: ", cache);

//   return function (x) {
//     if (cache[x]) {
//       console.log("result from cache");

//       return cache[x];
//     } else {
//       console.log("calculating result");

//       const result = func(x);
//       cache[x] = result;

//       return result;
//     }
//   };
// };

// const calculate = memo(add);

// My Code
function add(...num) {
  return num.reduce((acc, cur) => acc + cur);
}

const memory = (func) => {
  const cache = {};

  return function (...x) {
    const key = JSON.stringify(x);

    if (cache[key]) {
      // console.log("result from cache");
      return cache[key];
    } else {
      const result = func(...x);
      cache[key] = result;

      // console.log("calculating result");
      return result;
    }
  };
};

const calculate = memory(add);

console.log(calculate(20, 20, 20));
console.log(calculate(20, 20, 20));
console.log(calculate(20, 20, 20));
