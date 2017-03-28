loadTusLibros();

// Mostramos nuestros libros.
function loadTusLibros(){
  var user = JSON.parse(localStorage.userInfo);
  var htmlToWrite = ""
  for (var index = 0; index < user.libros.length; ++index) {
    var libro = user.libros[index];
    var title = libro.title;
    var autor = libro.autor;
    var desc = libro.desc;
    var image = libro.imgURL;
    var fecha = libro.fecha;
    var lugar = libro.lugar;

    htmlToWrite +=
    "<div class=\"libro\">" +
      "<img class=\"libroImage\" src=\"" + image + "\"/>" +
      "<div class=\"libroInfo\">" +
        "<h3>" + title + "</h3>" +
        "<p><strong>Autor: </strong> " + autor + "</p>" +
        "<p><strong>Descripción: </strong> " + desc + "</p>" +
        "<p><strong>Fecha de Entrega: </strong>" + fecha + "<br>" +
        "<strong>Lugar de Entrega: </strong>" + lugar + "</p></div></div>";
  }

  var div = document.getElementById('tusLibrosContainer');
  div.innerHTML = div.innerHTML + htmlToWrite;
}
