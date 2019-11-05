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

  // source https://www.sitepoint.com/javascript-media-queries/
  /* JavaScript Media Queries */
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 1000px)");
    mq.addListener(WidthChange);

    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {

    if (mq.matches) {
      $(".hamburger-menu").hide();
    }

  }



})