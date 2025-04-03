// by this ready function jquery will load after dom  is ready and before content  is loaded

$(document).ready(function () {
  console.log("document is ready");

  $("p").click(function () {
    alert("you clicked on a paragraph");
  });

  let sum = function (x, y) {
    console.log(x + y);
    console.log(typeof x, arguments.length);
  };

  sum(5, 7);

  function create() {
    var counter = 0;

    return {
      increment: function () {
        counter++;
      },
      print: function () {
        console.log(counter);
      },
    };
  }

  var c = create();
  c.increment();
  c.increment();
  c.print(); // ==> 1
});
