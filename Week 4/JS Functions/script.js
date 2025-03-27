// simple function decleration
function add(a, b) {
  return a + b;
}

function func(a, b) {
  console.log(a);
  console.log(b);

  // it returns undefined
}

func(45, 6);
let x = add(45, 6);
console.log(x);

// arrow function
const as = (a, b) => {
  console.log("a  is " + a + " and b is " + b);
  return a * b;
};

console.log(as(3, 22));

setTimeout(function () {
  // Anonymous Function, they dont have name
  console.log("Hello, world!");
}, 2000);

function rat() {
  console.log("inside rat");

  function cat() {
    console.log("This is cat");
  }

  cat();
  console.log("This is rat");
}

rat();
