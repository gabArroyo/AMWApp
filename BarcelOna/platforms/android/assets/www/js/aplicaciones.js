loadApps();

// Cargamos las aplicaciones.
function loadApps(){
  if(localStorage.appsLoaded == "false")
    getApps();
  showApps();
}

// Obtenemos las apps del servidor.
function getApps(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/155e9r",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.listaApps = JSON.stringify(data.apps);
      localStorage.appsLoaded = "true";
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de datos de apps.");
    }
  });
}

// Las mostramos en pantalla.
function showApps(){
  var apps = JSON.parse(localStorage.listaApps);
  var htmlToWrite = "<p class=\"title\">Apps culturales</p>";
  for (var index = 0; index < apps.length; ++index) {
    var app = apps[index];
    var title = app.appName;
    var desc = app.desc;
    var appUrl = app.urlApp;
    var image = app.urlImg;
    var nota = getNota(parseFloat(app.nota));

    htmlToWrite +=
    "<a rel=\"external\" href=\"" + appUrl + "\" class=\"linkApp\"><div class=\"app\">" +
      "<img class=\"appImage\" src=\"" + image + "\"/>" +
      "<div class=\"appInfo\">" +
        "<h3>" + title + "</h3>" +
        "<p>" + desc + "</p></div>" +
      "<div class=\"" + nota + "\"><p>" + parseFloat(app.nota) + "</p></div></div></a>";
  }
  var div = document.getElementById('appsContainer');
  div.innerHTML = htmlToWrite;
}

// Calculamos la nota y le indicamos el css necesario.
function getNota(value){
  if (value > 7.0)
    return "nota buena";
  else if (value >= 5.0)
    return "nota media";
  else
    return "nota mala";
}
