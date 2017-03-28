loadTramites();

// Una función que simularía el código que se usaría para un trámite.
// La cuenta del usuario quedaría vinculada con la id del trámite.
// Posteriormente cuanto llegase el trámite a la administración pública se
//  mostraría la información en avisos.
function tramiteStub(){
  var id = document.getElementById('tramite').value;
  if (id == "")
    alert("ID trámite incorrecto.");
  else{
    var div = document.getElementById('tramitesContainer');
    div.innerHTML = "<div class=\"funcTramite\">" +
      "<h2>El trámite ha sido añadido con éxito!</h2>" +
      "<p id=\"textoTramite\">Tu trámite con id: " + id + " ha sido añadido a tu cuenta. " +
      "Tan pronto como sea añadido a la base de datos pública aparecerá listado.</p>" +
      "<img class=\"tramiteImage\" src=\"img/serveis/iconoCorrecto.png\"/></div>";
  }
}

// Carga los trámites del usuario.
function loadTramites(){
  var user = JSON.parse(localStorage.userInfo);
  var htmlToWrite = ""
  for (var index = 0; index < user.tramites.length; ++index) {
    var tramite = user.tramites[index];
    var imgUrl = chooseTramite(tramite.tipo);

    tramiteInfo = "<div class=\"tramite\">" +
    "<img class=\"tramiteImage\" src=\"" + imgUrl + "\"/>" +
    "<div class=\"tramiteInfo\">" +
    "<h4>" + tramite.msg + "</h4>" +
    "<p class=\"info\"><strong>Número del trámite:</strong> " + tramite.id + ".</br>" +
    "<strong>Fecha Estimada:</strong> " + tramite.date + ".</br>" +
    "<strong>Recogelo en:</strong> " + tramite.place + "</p>" +
    "<div class=\"infoEstado\">" +
    "<p><strong>Estado</strong></p>" +
    "<div class=\""+ getStateTramite(tramite.state) + "\"><p>" + tramite.state +
    "%</p></div></div></div></div>";

    htmlToWrite += tramiteInfo;
  }

  var div = document.getElementById('tramitesContainer');
  div.innerHTML = div.innerHTML + htmlToWrite;
}

// Devuelve el icono dependiendo del tipo de trámite.
function chooseTramite(tipo, tramiteInfo){
  if (tipo == "administracion"){
    return "img/serveis/iconoTramites.png";
  }
  else if(tipo == "emergencias"){
    return "img/serveis/iconoEmergencias.png";
  }
}

// Elige el css para el tramite.
function getStateTramite(value){
  if (value == 100)
    return "estado finalizado";
  else if (value == 0)
    return "estado noIniciado";
  else
    return "estado enProceso";
}
