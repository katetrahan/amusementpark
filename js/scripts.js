$(document).ready(function() {
  $("form#heightinput").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#riderheight").val());
    if (height < 60) {
      $("#r1").addClass("bg-success");
      $("#r2").addClass("bg-success");
      $("#r3").addClass("bg-success");
      $("#r4").addClass("bg-danger");
      $("#r5").addClass("bg-danger");
      $("#r6").addClass("bg-danger");
    } else if (height >= 60 && height < 84) {
      $("#r1").addClass("bg-danger");
      $("#r2").addClass("bg-danger");
      $("#r3").addClass("bg-danger");
      $("#r4").addClass("bg-success");
      $("#r5").addClass("bg-success");
      $("#r6").addClass("bg-success");
    } else if (height >= 84) {
      $("#r1").addClass("bg-danger");
      $("#r2").addClass("bg-danger");
      $("#r3").addClass("bg-danger");
      $("#r4").addClass("bg-success");
      $("#r5").addClass("bg-success");
      $("#r6").addClass("bg-danger");
    } else {
      alert("Try entering a number!");
    }
  });
});
