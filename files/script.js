$(document).ready(function() {

  // add Wiki Search header
  $("#four").html("<p id='title'><i class='fa fa-wikipedia-w' aria-hidden='true'></i>" + "iki Search</p>");

  // add Search Icon
  $("#four").append("<span id='search'><i class='fa fa-search' id='search-icon' aria-hidden='true'></i></span>");

  // search box on click
  $("#four").on("click", "#search", function() {
    $("#search").replaceWith("<form><input type='text' name='search' placeholder='Search...'></form>");
  });

//   // make title disappear
//   // $("#title").slideToggle();
//   // .on("mouseover mouseout"), function() {
//         $(this).toggleClass("wiggle")
// }
//


  // spinning gears
  // $("#four").html("<i class='fa fa-spinner fa-spin'></i>" + gear + gear , etc);



  //







}); // doc ready close
