//          Wrong way!
// function timer(number) {
//   console.log("Start timer");

//   for (let i = 0; i <= number; i++) {
//     //   console.log(i);
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("End timer");
// }

// timer(5);

//      Right way
function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
}

async function timer(number) {
  console.log("Start timer");

  for (let i = 0; i <= number; i++) {
    const result = await delay(i);
    console.log(result);
  }

  console.log("End timer");
}

timer(5);
