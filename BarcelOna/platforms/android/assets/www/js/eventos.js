loadEventos();

// Cargamos las aplicaciones.
function loadEventos(){
  if(localStorage.eventosLoaded == "false")
    getEventos();
  showEventos();
}

// Obtenemos las eventos del servidor.
function getEventos(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/vt3sf",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.listaEventos = JSON.stringify(data.eventos);
      localStorage.eventosLoaded = "true";
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de datos de eventos.");
    }
  });
}

// Las mostramos en pantalla.
function showEventos(){
  var eventos = JSON.parse(localStorage.listaEventos);
  var htmlToWrite = "<p class=\"title\">Eventos deportivos</p>";
  for (var index = 0; index < eventos.length; ++index) {
    var evento = eventos[index];
    var id = evento.id;
    var tituloEvento = evento.eventoName;
    var desc = evento.shortDesc;
    var urlImg = evento.urlImg;
    var fecha = evento.fecha;
    var hora = evento.hora;
    var asistentes = evento.asistencias.length;

    htmlToWrite +=

    "<div class=\"evento\">" +
      "<img class=\"eventoImage\" src=\"" + urlImg + "\"/>" +
      "<div class=\"eventoInfo\">" +
        "<h3>" + tituloEvento + "</h3>" +
        "<p>" + desc + "<br>" +
        "<strong>Fecha:</strong>" + fecha + "<br>" +
        "<strong>Hora:</strong>" + hora + "</p>" +
        "<button class=\"buttonEvent\" onclick=\"showEvent(" + id + ")\">Ver</button>" +
      "</div><div class=\"asisten\">" +
        "<p>Asistentes</p><div class=\"asistencias\">" +
        "<p>" + asistentes + "</p></div></div></div>"
  }
  var div = document.getElementById('eventoContainer');
  div.innerHTML = htmlToWrite;
}


function showEvent(id){

  var eventos = JSON.parse(localStorage.listaEventos);
  var htmlToWrite = "";

  for (var index = 0; index < eventos.length; ++index) {
    var evento = eventos[index];
    var idEvento = evento.id;
    if (id != idEvento)
      continue;

    var tituloEvento = evento.eventoName;
    var desc = evento.longDesc;
    var urlImg = evento.urlImg;
    var fecha = evento.fecha;
    var hora = evento.hora;
    var asistentes = evento.asistencias;

    htmlToWrite =
      "<p class=\"title\">" + tituloEvento + "</p>" +
        "<div class=\"evento\">" +
          "<img class=\"eventoImage\" src=\"" + urlImg + "\"/>" +
          "<div class=\"eventoInfo\">" +
            "<p>" + desc + "</p>" +
            "<p>" +
            "<strong>Fecha: </strong>" + fecha + "<br>" +
            "<strong>Hora: </strong>" + hora + "</p>" +
          "</div><div class=\"asisten\">" +
            "<p>Asistentes</p>" +
            "<div class=\"asistencias\"><p>" + asistentes.length + "</p></div>" +
            "<button class=\"ui-btn ui-shadow ui-corner-all\" onclick=\"asistir(" + idEvento + ")\">Asistir</button></div>" +
          "<div class=\"asistentes\">" +
            "<p class=\"title\">Algunos de los asistentes ... </p>" +
            "<div class=\"slideshow-container\">" + getAsistentes(asistentes) +
            "<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>" +
            "<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>" +
            "</div></div></div>";
  }
  var div = document.getElementById('eventoContainer');
  div.innerHTML = htmlToWrite;
  showSlides(slideIndex);
}

function asistir(idEvento){
  var eventos = JSON.parse(localStorage.listaEventos);
  var userInfo = JSON.parse(localStorage.userInfo);
  var htmlToWrite = "";

  for (var index = 0; index < eventos.length; ++index) {
    if(idEvento != eventos[index].id)
      continue;
    eventos[index].asistencias.push(userInfo.name);
    localStorage.listaEventos = JSON.stringify(eventos);
    break;
  }
}

function getAsistentes(asistentes){
  var html = ""
  var usuarios = JSON.parse(localStorage.listUsers);
  for (var index = 0; index < asistentes.length; ++index){
    for (var index2 = 0; index2 < usuarios.length; ++index2)
      if(asistentes[index] == usuarios[index2].name){
        html += "<div class=\"slidesAsistentes fade\">" +
            "<div class=\"asistenteContainer\">" +
            "<h2>" + usuarios[index2].name + "</h2>" +
            "<img class=\"asistenteImage\" src=\"" + usuarios[index2].imgAvatar + "\"></div></div>";
      }
  }
  return html;
}
