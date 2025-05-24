// for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// for in loop [ Object ]
const myObj = {
  name: "Javascript",
  estd: 1995,
  founder: "Brendan Eich",
};

for (property in myObj) {
  console.log(property);
  console.log(myObj[property]);
}

const myArray = [1, 2, 3, 4, 5];

for (element in myArray) {
  console.log(element);
}
