console.log("hello");

setTimeout(() => {
  console.log("Async 1");
}, 10000);

setTimeout(() => {
  console.log("Async 2");
}, 30000);

setTimeout(() => {
  console.log("async 3");
}, 20000);

setTimeout(() => {
  console.log("async 4");
}, 0);

let a = 1;
for (let i = 0; i < 10000000; i++) {
  a += 1;
}

console.log(a);
console.log("End");
