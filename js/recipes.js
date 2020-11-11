//Cada función despliega y muestras las recetas

$("#cake").click(function() {
  $("#recipe-div1").slideToggle(2000)
  $("#recipe-div1").css("display", "block");
});

$("#cupcake").click(function() {
  $("#recipe-div2").slideToggle(2000)
  $("#recipe-div2").css("display", "block");
});

$("#brownie").click(function() {
  $("#recipe-div3").slideToggle(2000)
  $("#recipe-div3").css("display", "block");
});

$("#merengue").click(function() {
  $("#recipe-div4").slideToggle(2000)
  $("#recipe-div4").css("display", "block");
});

$("#buttercream").click(function() {
  $("#recipe-div5").slideToggle(2000)
  $("#recipe-div5").css("display", "block");
});