// sessionStorage api

let players = parseInt(prompt("Enter no. of players"));


for (let i = 1; i <= players; i++) {
  let naam = prompt("naam");
  sessionStorage.setItem("name", naam);
  document.getElementById("demo").innerHTML = sessionStorage.getItem("name");
}

console.log(sessionStorage.getItem("name"));
