const employees = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Bob Smith",
    position: "UI/UX Designer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Charlie Lee",
    position: "Product Manager",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Diana King",
    position: "QA Engineer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Ethan Brown",
    position: "DevOps Engineer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Fiona Clark",
    position: "Data Scientist",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "George Adams",
    position: "Frontend Developer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Hannah Wright",
    position: "HR Manager",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Ian Moore",
    position: "Technical Writer",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
  {
    name: "Julia Martinez",
    position: "Marketing Lead",
    description: [
      "employee of this company",
      "employee of the year",
      "hard worker since birth",
    ],
  },
];

let index = 0;

function showCard() {
  let employee = employees[index];

  $(".card-sec").html("");
  $(".card-sec").append(`<div class="cardo p-3"></div>`);
  $(".cardo").append(`<h2 class="name text-center fs-1">${employee.name}</h2>`);
  $(".cardo").append(
    `<p class="position text-center fs-4 fw-bold">${employee.position}</p>`
  );
  $(".cardo").append(`<ul class="disc"></ul>`);

  // $(".name").text(employees[index].name);
  // $(".position").text(employees[index].position
  $(".disc").html("");
  employees[index].description.forEach((info) => {
    $(".disc").append(`<li class="disc-item fs-4">${info}</li>`);
  });
  index++;
}

$(document).ready(function () {
  showCard();
  $(".nextbtn").click(function () {
    $(".card-sec").html('<img src="ZKZg.gif" class="loder">');
    setTimeout(() => {
      showCard();
    }, 1000);
  });

  $(".re-view").click(function () {
    index = 0;
    $(".card-sec").html("");
    setTimeout(() => {
      showCard();
    }, 1000);
  });
});
