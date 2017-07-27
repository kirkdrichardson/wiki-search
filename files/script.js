$(document).ready(function() {

// #########      DOM STYLING  - initial load  ################################### //
  // add Wiki Search header
  $("#four").html("<p id='title'><i class='fa fa-wikipedia-w' aria-hidden='true'></i>" + "iki Search</p>");
  // add Search Icon & random button
  $("#four").append("<span id='search'><i class='fa fa-search' id='search-icon' aria-hidden='true'></i></span><br><button id='random'>Random</button>");
  // insert archive background-image
  $("#four").css("background-image", "linear-gradient(rgba(212, 214, 195, 1),rgba(212, 214, 195, .9)), url('https://greatspeeches.files.wordpress.com/2008/09/infamy21.jpg?w=500')");


// On search icon click
  $("#four").on("click", "#search", function() {
        // add a search box
    $("#search").replaceWith("<form><input id='wikiSearch' type='text' name='wikiSearch' placeholder='Search...'></form><br><p id='orText'>or</p>");
  });


// On "Get random" button click: open a random wiki page
$("#four").on("click", "#random", function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});

// #########      HANDLING SEARCHES       ################################### //

// The connection between enter & the getSearchResults function now exists,
// though the .get (and .getJSON) requests are not working. Start by reading more about
// the Wiki API

function getSearchResults(event) {
  if (event.which == 13) {
    alert('event was indeed 13. Now for the getJSON request');
    var url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";
    $.get(url, function(json) {
      alert('Made the json request');
    }, "jsonp");
  }
}

// event binding (delegated event for the descendent element #wikiSearch)
$("#four").on("keypress", "#wikiSearch", penis);


// // function getResults() {
// //   alert('penis');
// }
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
