const arr = [
  "red",
  "blue",
  "green",
  "brown",
  "yellow",
  "aqua",
  "#5e96e0",
  "black",
  "pink",
  "#c93750",
  "#c45ae1",
  "#b7d618",
];

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * arr.length);
  document.getElementById("box").style.backgroundColor = arr[index];
});
