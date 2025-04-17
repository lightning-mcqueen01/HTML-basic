jQuery.ajax({
  url: "doc.txt",
  success: function (data) {
    alert("Document lodded successfully ");
  },
  error: function (xhr, error) {
    console.log("error");
  },
});

$(document).ready(function () {
  $.get("doc.txt", "abhishek", function (data, status) {
    $("#para").html(data);
    alert("Status : " + status);
  });
});
