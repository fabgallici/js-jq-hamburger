$(document).ready(function () {
  //al click su icona hamburger, cambio display in block di hamb-menu
  $(".header-right > a").click(function() {

    $(".hamburger-menu").show(100);   
    // $(".hamburger-menu").css("display", "block");  //alt method
  });

  //al click icona chiusura, cambio display in none di hamb-menu
  $(".close").click(function() {

    $(".hamburger-menu").hide();
    // $(".hamburger-menu").css("display", "none"); //alt method
  })


})