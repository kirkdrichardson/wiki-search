$(document).ready(function() {
  // ####################################################################
  // #########      DOM STYLING    ################################### //
  // ####################################################################
  // INITIAL LOAD
  // add Wiki Search header
  $("#four").html("<p id='title'><i class='fa fa-wikipedia-w' aria-hidden='true'></i>" + "iki Search</p>");
  // add Search Icon & random button
  $("#four").append("<span id='search'><i class='fa fa-search' id='search-icon' aria-hidden='true'></i></span><br><button id='random'>Random</button>");
  // insert archive background-image
  $("#four").css("background-image", "linear-gradient(rgba(212, 214, 195, 1),rgba(212, 214, 195, .9)), url('https://greatspeeches.files.wordpress.com/2008/09/infamy21.jpg?w=500')");

  // ON SEARCH ICON CLICK
  // known issues: makes a get request for searchicon.png to local machine
  $("#four").on("click", "#search-icon", function() {
    // add a search box
    $("#search").replaceWith("<form><input id='wikiSearch' type='text' placeholder='Search...'></form><br><p id='orText'>or</p>");
  });

  // ###########################################################
  // #############       LOGIC     #############################
  // ###########################################################

  // On "Get random" button click: open a random wiki page
  $("#four").on("click", "#random", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

  // #########      HANDLING SEARCHES       ################################### //

  function getUserInput(event) {
    if (event.which == 13) {
      var usrInput = document.getElementById("wikiSearch").value;
      // on enter, start spinning gear
      loading();
      // use returned search query to initiate ajax request
      getData(retSearchStr(usrInput));
    }
  }

  // adds spinning gears & fade in of getData results
  function loading() {
    $("#container").hide(function() {
        $("body").append("<i id='gear' class='fa fa-gear fa-spin' style='font-size: 500px; color: #023a8c;'></i>");
  })
  .delay(200).fadeIn(200);
  }

  // add callback to get users search input
  function retSearchStr(usrInput) {
    var query = "https://en.wikipedia.org//w/api.php?action=query&format=json&origin=\*&uselang=user&list=search&srsearch="; // MediaWiki web service API
    return query + encodeURI(usrInput);
  }

  // this synchronous request currently works, though is deprecated & not well
  // supported for cross origin requests. Question is why does it silently fail if
  // asynchronous? Looking into $.Deferred & the promise object
  function getData(url) {
    $.ajax({
      url: url,
      dataType: "json",
      async: false,
      success: function(data) {
        insertResults(data);
      }
    });
  }

  // Appends title & desc of top search results in a linked div
  function insertResults(data) {
    $("link[href='./files/style.css']").attr("href", "./files/style-results.css"); // change style sheet
    $(".content").html("");

    var searchObj = data["query"]["search"]; // search object w/ results
    var pageLink = "https://en.wikipedia.org/wiki/";

    for(var i = 0; i < searchObj.length; i++) {
      var title = searchObj[i]["title"];
      // adds linked anchor tag containing div containing title & text snippet for each search result
      $(".content").append(
        "<a target='_blank' href='" + pageLink + encodeURI(title) + "'>" +
        "<div class='resultItem'>" +
          "<h3>" + title + "</h3>" +
          "<p class='description'>" + searchObj[i]["snippet"] + "..." +
        "</p></div></a>"
    );
    }
  }

  // event binding (delegated event for the descendent element #wikiSearch)
  $("#four").on("keypress", "#wikiSearch", getUserInput);

}); // doc ready close
