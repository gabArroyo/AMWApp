
var showListVisited = false;
window.onload = printShows();

function printShows(){
  if (showListVisited == false)
    getListOfShows();

  document.getElementById("slider").innerHTML = "";
  for ( var i=0; i < localStorage.length; i++ ) {
    var key = localStorage.key(i);
    var item =  JSON.parse(localStorage.getItem(key));
    document.getElementById("slider").innerHTML +=
    "<div class=\"ui-grid-a\" id=\"showContainer\">\
      <div class=\"ui-block-a\" id=\"showInfo\">\
        <label id=\"showInfoId\">ID: " + key + "</label>\
        <label id=\"showInfoTitle\">NAME: " + item.name + "</label>\
        <label id=\"showInfoNumSeasons\">Number of Seasons: " + item.nb_seasons + "</label>\
        <div class =\"entradaContainer\"><button class=\"ui-btn ui-icon-home ui-btn-icon-left\" onClick=\"showShowDetail(" + key + ")\">Show Detail</button></div>\
        <div class =\"entradaContainer\"><button class=\"ui-btn ui-icon-home ui-btn-icon-left\" onClick=\"showSeasonListShow(" + key + ")\">Season List</button></div>\
      </div>\
      <div class=\"ui-block-b\">\
        <img style=\"padding-top: 10px;padding-bottom: 10px;padding-right: 5px;\" src=" + item.image_url + " align=\"middle\">\
      </div>\
    </div><span></span>";
  }
}

function getListOfShows(){
  $.ajax({
		type: "GET",
		url: "http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/show_list",
    crossOrigin: true,
		dataType: "json",
    success: function(data){
      var success = data.status.success;
      if (success != true)
        alert(retornarErrorListOfShows(data));
      else{
        var series = data.status.data;
        for ( var i=0; i < series.length; i++ ) {
          var id = data.status.data[i].id;
          var name = data.status.data[i].name;
          var seasons = data.status.data[i].nb_seasons;
          var image_url =data.status.data[i].image_url;
          var show = {"name":name, "nb_seasons":seasons, "image_url":image_url};
          localStorage.setItem(id, JSON.stringify(show));
        }
        showListVisited = true;
      }
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con: http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/show_list\n"
      + "Mensaje de Error: " + errMsg);
    }
	});
}

function showShowDetail(show_id){
  var show =  JSON.parse(localStorage.getItem(show_id));
  if (show.description == null){
    getShowDetail(show_id);
    show =  JSON.parse(localStorage.getItem(show_id));
  }

  var actorList = ""
  for (i = 0; i < show.main_actors.length; i++){
    actorList += "<li> " + show.main_actors[i] + " </li>";
  }

  document.getElementById("slider").innerHTML =
  "<div id=\"fullShowContainer\"><h2 id=\"fullShowInfoTitle\">" + show.name + "</h2><section id=\"fullShowImageContainer\"><img id=\"fullShowImage\" src=\"" + show.image_url + " align=\"middle\"></section><article id=\"fullShowInfoDescription\">\
      <p>" + show.description + "</p>\
    </article>\
    <section id=\"fullShowActors\">\
      <h2 id=\"fullShowActorsTitle\">Actors</h2>\
      <ul>" + actorList + "</ul>\
    </section>\
    <p id=\"fullShowSeasons\">Number of Seasons: " + show.nb_seasons + "</p>\
    <p id=\"fullShowID\">ID of the Show:" + show_id + "</p><div class =\"entradaContainer\" id=\"fullShowButtonLink\"><a style=\"width:100%;\" data-role=\"button\" class=\"ui-btn ui-icon-home ui-btn-icon-left\" href=" + show.imdb_url + ">Go To IMDB</a></div>\
    <div class =\"entradaContainer\" id=\"fullShowButtonLink\"><button style=\"width:100%;\" data-role=\"button\" class=\"ui-btn ui-icon-home ui-btn-icon-left\" onClick=\"printShows()\">Back to Show List</button></div></div>";
}

function getShowDetail(show_id){
  var datosAEnviar = {"show_id": show_id};
  $.ajax({
		type: "GET",
    async: false,
		url: "http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/show_detail",
    data: datosAEnviar,
    crossOrigin: true,
		dataType: "json",
    success: function(data){
      var success = data.status.success;
      if (success != true)
        alert(retornarErrorShowDetail(data));
      else{
        if (localStorage.getItem(show_id).description == null){
          var show =  JSON.parse(localStorage.getItem(show_id));
          show.description = data.status.data.description;
          show.main_actors = data.status.data.main_actors;
          show.nb_seasons = data.status.data.nb_seasons;
          show.imdb_url = data.status.data.imdb_url;
          localStorage.setItem(show_id, JSON.stringify(show));
        }
      }
    },
		failure: function(errMsg){
			alert("Error durante la comunicación con: http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/show_detail\n"
			+ "Mensaje de Error: " + errMsg);
		}
	});
}

function showSeasonListShow(show_id){
  var show =  JSON.parse(localStorage.getItem(show_id));
  if (show.listOfSeasons == null){
    getSeasonListOfShow(show_id);
    show =  JSON.parse(localStorage.getItem(show_id));
  }

  document.getElementById("slider").innerHTML = "<h2 id=\"fullShowInfoTitle\">" + show.name + "</h2>";
  for (i = 0; i < show.listOfSeasons.length; i++){
    var id = show.listOfSeasons[i].id;
    var name = show.listOfSeasons[i].name;
    var short_name = show.listOfSeasons[i].short_name;
    var nb_chapters = show.listOfSeasons[i].nb_chapters;
    var emitted = show.listOfSeasons[i].emitted;

    document.getElementById("slider").innerHTML +=
    "<div id=\"seasonContainer\">\
      <p id=\"seasonID\">ID of the Season: " + id + "</p>\
      <p id=\"seasonName\">Season name: " + name + "</p>\
      <p id=\"seasonShortName\">Short name: " + short_name + "</p>\
      <p id=\"seasonNumberChapters\">Number of Chapters: " + nb_chapters + "</p>\
      <p id=\"seasonEmission\">Emitted: " + emitted + "</p>\
    </div>";
  }

  document.getElementById("slider").innerHTML += "<div class =\"entradaContainer\"\
  id=\"fullShowButtonLink\"><button style=\"width:100%;\" data-role=\"button\"\
  class=\"ui-btn ui-icon-home ui-btn-icon-left\" onClick=\"printShows()\">\
  Back to Show List</button></div>";
}

function getSeasonListOfShow(show_id){
  var datosAEnviar = {"show_id": show_id};
  $.ajax({
		type: "GET",
    async: false,
		url: "http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/season_list",
    data: datosAEnviar,
    crossOrigin: true,
		dataType: "json",
    success: function(data){
      var success = data.status.success;
      if (success != true)
        alert(retornarErrorSeasonList(data));
      else{
        if (localStorage.getItem(show_id).listOfSeasons == null){
          var seasons = data.status.data;
          var show =  JSON.parse(localStorage.getItem(show_id));
          show.listOfSeasons = seasons;
          localStorage.setItem(show_id, JSON.stringify(show));
        }
      }
    },
		failure: function(errMsg){
			alert("Error durante la comunicación con: http://upf.angeldiaz.es/aism2016_17/ws/consulta/0/season_list\n"
			+ "Mensaje de Error: " + errMsg);
		}
	});
}

function retornarErrorListOfShows(data){
  var error = data.status.error;
  if (error == 1)
    return "Server error.";
  else
		return "Other errors.";
}

function retornarErrorShowDetail(data){
  var error = data.status.error;
  if (error == 1)
    return "Server error.";
  else if (error == 2)
    return "Show_id invalid.";
  else
		return "Other errors.";
}

function retornarErrorSeasonList(data){
  var error = data.status.error;
  if (error == 1)
    return "Server error.";
  else if (error == 2)
    return "Show_id invalid.";
  else
		return "Other errors.";
}
