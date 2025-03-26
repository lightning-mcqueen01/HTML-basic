// Simple function
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}

// New keyword to create an object
let car = new vehicle("GT", "BMW", "1998cc");
// Property accessors
console.log(car.name);
console.log(car.maker);
console.log(car["engine"]);

// Adding methods to the car object
let bike = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
  start: function () {
    console.log("Starting the engine...");
  },
};
bike.start();
// Adding method stop() later to the object
bike.stop = function () {
  console.log("Applying Brake...");
};
bike.stop();

const x = `{"name":"Abhi", "age":25}`;
console.log(x);
const y = JSON.parse(x);
console.log(y);
