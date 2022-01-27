$(document).ready(function() {
  $("form#information").submit(function(event) {
    const name = parseInt($("input#name").val());
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    const born = parseInt($("input#borng").val());

    $("#img-hidden").show();

    event.preventDefault();
  });
})