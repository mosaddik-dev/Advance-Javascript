const circle = document.getElementById("circle");

const observer = new IntersectionObserver(
  (items) => {
    //  etaw use korte pari.
    //   if (items[0].isIntersecting) {
    //     console.log("circle visible");
    //   } else {
    //     console.log("circle invisible");
    //   }

    items.forEach((item) => {
      if (item.isIntersecting) {
        console.log(`${item.target.id} is visible`);
      } else {
        console.log(`${item.target.id} is not visible`);
      }
    });
  },
  {
    threshold: 1, // [optional object] ami jodi cai je element ta puropuri visible hole tarpor event fire hobe, amra chaile ekhane 0.5 othoba onno kichuio dite pari
  }
);

observer.observe(circle);
