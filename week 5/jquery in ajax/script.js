$(document).ready(function () {
  $("button").click(function () {
    $.getJSON("result.json", function (jd) {
      $(".img").html("<p> Name: " + jd.name + "</p>");
      $(".img").append("<p>Age : " + jd.age + "</p>");
      $(".img").append("<p> Sex: " + jd.sex + "</p>");
    });
  });
});
