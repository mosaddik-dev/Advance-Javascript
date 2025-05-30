console.log("inside global exicution context");
var x = 5;

function testMe() {
  console.log("inside test me exicution context");
  var b = 10;

  var user = {
    name: "mosaddik",
    country: "BD",
  };

  function testAgain() {
    console.log("inside testAgain exicution context");
    console.log("exitsting testAgain exicution context ");
  }
  testAgain();
  console.log("Existing testMe exicution context");
}

testMe();

console.log("Existing global execution context");
