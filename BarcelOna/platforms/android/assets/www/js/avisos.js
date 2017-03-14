loadAvisos();


// Cargamos los avisos del usuario.
function loadAvisos(){
  var user = JSON.parse(localStorage.userInfo);
  var htmlToWrite = ""
  for (var index = 0; index < user.avisos.length; ++index) {
    var aviso = user.avisos[index];
    var adviseInfo = {
      url : "",
      imgUrl: ""
    }

    chooseAdvice(aviso.tipo, adviseInfo);

    htmlToWrite += "<a rel=\"external\" href=\"" + adviseInfo.url + "\" class=\"linkAviso\">" +
    "<div class=\"aviso\">" +
      "<img class=\"avisoImage\" src=\"" + adviseInfo.imgUrl + "\"/>" +
      "<p>" + aviso.msg + "</p></div></a>\n";
  }

  var div = document.getElementById('avisosContainer');
  div.innerHTML = div.innerHTML + htmlToWrite;
}

// Escogemos que tipo de aviso es.
function chooseAdvice(tipo, adviseInfo){
  if (tipo == "policia"){
    adviseInfo.url = "policia.html";
    adviseInfo.imgUrl = "img/serveis/iconoPolicia.png";
  }
  else if(tipo == "medico"){
    adviseInfo.url = "emergencias.html";
    adviseInfo.imgUrl = "img/serveis/iconoEmergencias.png";
  }
  else if(tipo == "bombero"){
    adviseInfo.url = "avisos.html";
    adviseInfo.imgUrl = "img/serveis/iconoBomberos.png";
  }
  else if(tipo == "biblioteca"){
    adviseInfo.url = "biblioteca.html";
    adviseInfo.imgUrl = "img/serveis/iconoBiblioteca.png";
  }
}
