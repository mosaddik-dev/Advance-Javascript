//      example 1
let num1 = 2;

var sum = function () {
  let num3 = 4;

  return function () {
    return num1 + num3;
  };
};

const myFunc = sum();

//      example 2
function backAccount(initialBalance) {
  let balance = initialBalance;
  return function () {
    return balance;
  };
}

const account = backAccount(100000);
console.dir(account());
