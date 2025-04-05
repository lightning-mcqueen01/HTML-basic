$(document).ready(function () {
  $("#box").width(200);
  $("#box").height(200);
  $("#start").click(function () {
    $("#box")
      .css("background-color", "darkcyan")
      .animate({ width: "350px", left: "500px" }, 1000);
  });

  $("#fadeIn").click(function () {
    $(".tog-div").fadeIn("slow", function () {
      alert("Fade in complete");
    });
  });
  $("#fadeOut").click(function () {
    $(".tog-div").fadeOut("slow", function () {
      alert("Fade out complete");
    });
  });
  $("#toggle-fade").click(function () {
    $(".tog-div").fadeToggle("fast");
  });
});
