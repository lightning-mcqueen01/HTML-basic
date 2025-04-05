$(document).ready(function () {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "gray",
  ];

  $(para).width(300);
  $(para).height(300);

  $("#copyBtn").click(function () {
    $("#para").clone().appendTo($(".main"));
  });

  $("#colorBtn").click(function () {
    $("#para").toggleClass("changer");
  });

  let width = 500;
  let height = 500;

  $("#addDiv").click(function () {
    width -= 50;
    height -= 50;
    const random = Math.floor(Math.random() * colors.length);

    $(".inner-div").html("<div>hellow</div>").css({
      "background-color": colors[random],
      width: width,
      height: height,
    });
  });
});
