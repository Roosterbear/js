// Skills:
// - Add css to elements by jQuery
// - Use fadeOut + timers
// - Create color striped tables


$(document).ready(function(){
  $(".red").css("background", "red")
                      .css("color", "white")
                      .css("padding", "5px");

  $(".green").css("background", "green")
  .css("color", "white")
  .css("padding", "5px");                      


  var gm = $('#green-message');
  setTimeout(function(){
    gm.text("Bye...");

    gm.fadeOut(2000);
  },1000);

  var rows = $("tr");
  rows.filter(":even").css("background", "blue").css("color","white").css("padding", "5px");
  rows.filter(":odd").css("background", "red").css("color","white").css("padding", "5px");
});