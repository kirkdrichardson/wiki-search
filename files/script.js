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
  // var jsonRequest = $.getJSON("https://en.wikipedia.org//w/api.php?action=query&format=json&origin=\*&uselang=user&list=search&srsearch=computer", function(json, status) {
  //     alert("made request");
  //
  //   if (status == "success") {
  //     console.log("successful retrieval");
  //   }
  //   else {
  //     console.log("retrieval failed");
  //   }
  // });

  // function jsonRequest(url) {
  //   alert("inside jsonRequest // url is " + url)
  //   $.getJSON(url, function(json, status) {
  //      alert("made request");
  //
  //    if (status == "success") {
  //      console.log("successful retrieval");
  //    }
  //    else {
  //      console.log("retrieval failed");
  //    }
  //  });
  // }


  function getUserInput(event) {
    if (event.which == 13) {
      alert("event was enter");
      var usrInput = document.getElementById("wikiSearch").value;
      alert("user input is " + usrInput + " Now about to run getData");

      // pass user input to getData
      getData(retSearchStr(usrInput));
    }
  }

  // add callback to get users search input
    function retSearchStr(search) {
      alert('Inside retSearchStr function');
      search = encodeURI(search);
      alert("Encoded user input is " + search + " about to pass query str as arg to getData");
      // add user search term to query url
      var query = "https://en.wikipedia.org//w/api.php?action=query&format=json&origin=\*&uselang=user&list=search&srsearch=" + search; // MediaWiki web service API
      return query;
    }

    function getData(url) {
      alert("inside getData function  // url is " + url);

// why does this fail to load in another function?
  // probably because getJSON is asynchronous. See promise & deferred object
      $.getJSON(url, function(json, status) {
         alert("made request");

       if (status == "success") {
         console.log("successful retrieval");
       }
       else {
         console.log("retrieval failed");
       }
     });
      // jsonRequest(url);
      // make ajax request to MediaWiki action API
      // $.getJSON(url, function(json, status) {
      //   alert("made request");
      //   if (status === "success") {
      //     console.log("successful retrieval");
      //   }
      //   else {
      //     console.log("retrieval failed");
      //   }
      // });
    }


    // event binding (delegated event for the descendent element #wikiSearch)
    $("#four").on("keypress", "#wikiSearch", getUserInput);



    // spinning gears
    // $("#four").html("<i class='fa fa-spinner fa-spin'></i>" + gear + gear , etc);



    //







  }); // doc ready close
