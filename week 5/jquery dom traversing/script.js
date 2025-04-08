$(document).ready(function () {
  $(".child").click(function () {
    $(".child").parent().before("<p>This is parent element</p>");
  });

  $(".parent").click(function () {
    $(".parent").parent().before("<p>This is grand parent element</p>");
    
  });
});
