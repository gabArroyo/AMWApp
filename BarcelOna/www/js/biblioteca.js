loadBooks();

// Obtenemos la fecha en que devolveremos el libro (suponiendo siete días).
function computeDate(tiempoReserva){
  var dt = new Date();
  var date = new Date(dt.getFullYear(), (dt.getMonth() + 1),  dt.getDate());
  date.setDate(date.getDate() + tiempoReserva);

  return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
}

// Comprueba si es un visitante.
function checkVisitante(){
  var user = JSON.parse(localStorage.userInfo);
	if(user.name == "Visitante")
    return true;
  return false;
}

// Reservamos una copia de un libro.
function reservar(id){
  if (checkVisitante() == true){
    alert("No puedes reservar el libro si eres un visitante.");
    return;
  }

  var librosBiblioteca = JSON.parse(localStorage.booksBiblioteca);
  var reservedBook;
  for (var index = 0; index < librosBiblioteca.length; ++index) {
    var libro = librosBiblioteca[index];
    var titleId = libro.id.replace('#','');
    if (titleId == id){
      reservedBook = libro;
      reservedBook.fecha = computeDate(7);
      reservedBook.lugar = "Biblioteca Central";
      librosBiblioteca[index].reservado = true;
      break;
    }
  }
  if (reservedBook != undefined){
    localStorage.booksBiblioteca = JSON.stringify(librosBiblioteca);
    var user = JSON.parse(localStorage.userInfo);
    user.libros.push(reservedBook);

    localStorage.userInfo = JSON.stringify(user);
    window.location.href = "libroReservado.html";
  }
}

// Buscamos un libro.
function buscar(){
  var librosBiblioteca = JSON.parse(localStorage.booksBiblioteca);
  var titleSearch = document.getElementById('search').value.toLowerCase();
  var htmlToWrite = "<p class=\"title2\">Libros</p>";
  var bookFound = false;

  var biblioteca = document.getElementById('selectBiblioteca').value;
  if (biblioteca == "central"){
    for (var index = 0; index < librosBiblioteca.length; ++index) {
      var libro = librosBiblioteca[index];
      var title = libro.title;
      if (title.toLowerCase().includes(titleSearch) == false)
        continue;

      bookFound = true;
      var title = libro.title;
      var autor = libro.autor;
      var desc = libro.desc;
      var image = libro.imgURL;

      var botonReserva = "<button class=\"ui-btn ui-icon-info ui-btn-icon-left ui-shadow ui-corner-all\"" +
      "data-icon=\"info\" onclick=\"reservar(" + libro.id.replace('#','') + ")\">Reservar</button>";
      if (libro.reservado == true)
        botonReserva = "";
      htmlToWrite +=
      "<div class=\"libroCatalogo\">" +
        "<img class=\"libroCatalogoImage\" src=\"" + image +"\"/>" +
        "<div class=\"libroCatalogoInfo\">" +
          "<h3>" + title + "</h3>" +
          "<p>" + desc + "</p>" + botonReserva + "</div></div>";
    }
  }
  var div = document.getElementById('librosContainer');
  if (bookFound == true){
    div.innerHTML = htmlToWrite;
  }
  else{
    div.innerHTML = htmlToWrite + "<p class=\"mensajeLibros\">No se ha encontrado el libro indicado.<p>";
  }
}

// Simula la biblioteca que estamos consultando. En este caso somos hemos implementado la primera.
function checkValue(){
  var biblioteca = document.getElementById('selectBiblioteca').value;
  if (biblioteca == "central")
    loadBooks();
  else {
    document.getElementById('librosContainer').innerHTML = "<p class=\"title2\">Libros</p>" +
    "<p class=\"mensajeLibros\">No se han encontrado títulos en la biblioteca seleccionada.<p>";
  }
}

// Cargamos libros.
function loadBooks(){
  if(localStorage.librosBiblioteca == "false")
    getBooks();
  showBooks();
}

// Obtenemos los libros.
function getBooks(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/1dh0jb",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.booksBiblioteca = JSON.stringify(data.biblioteca);
      localStorage.librosBiblioteca = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de usuarios.");
    }
  });
}

// Mostramos los libros que estén presentes en la biblioteca.
function showBooks(){
  var librosBiblioteca = JSON.parse(localStorage.booksBiblioteca);
  var htmlToWrite = "<p class=\"title2\">Libros</p>";
  for (var index = 0; index < librosBiblioteca.length; ++index) {
    var libro = librosBiblioteca[index];
    if (libro.reservado == true)
      continue;
    var title = libro.title;
    var autor = libro.autor;
    var desc = libro.desc;
    var image = libro.imgURL;

    htmlToWrite +=
    "<div class=\"libroCatalogo\">" +
      "<img class=\"libroCatalogoImage\" src=\"" + image +"\"/>" +
      "<div class=\"libroCatalogoInfo\">" +
        "<h3>" + title + "</h3>" +
        "<p>" + desc + "</p>" +
        "<button class=\"ui-btn ui-icon-info ui-btn-icon-left ui-shadow ui-corner-all\"" +
        "data-icon=\"info\" onclick=\"reservar(" + libro.id.replace('#','') + ")\">Reservar</button>" +
      "</div></div>";
  }
  var div = document.getElementById('librosContainer');
  div.innerHTML = htmlToWrite;
}
