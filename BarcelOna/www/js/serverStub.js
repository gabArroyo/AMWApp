/* Server stub que simula un webservice real */
// Obtenemos todos los usuarios del servidor.
function getUsersServer(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/xft7r",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.listUsers = JSON.stringify(data.usuarios);
      localStorage.usersLoaded = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de usuarios.");
    }
  });
}

// Simulamos el funcionamiento del webservice del server donde comprueba si existe el usuario.
function webServiceCheckIfUserExists(userNameInput, passInput){
  var listaUsuarios = JSON.parse(localStorage.listUsers);
	for (var index = 0; index < listaUsuarios.length; ++index) {
		var user = listaUsuarios[index];
		if(user.name == userNameInput && user.pass == passInput){
      var userInfo = {
				name: user.name,
				img: user.imgAvatar
			};
			localStorage.userInfo = JSON.stringify(userInfo);
			return true;
		}
	}
	return false;
}

// Obtenemos todos los usuarios del servidor.
function getUsersAvisos(){
  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/umfiv",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",

    success: function(data){
      var status = data.status;
      localStorage.listAdvises = JSON.stringify(data.usuarios);
      localStorage.advisesLoaded = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con los avisos de usuarios.");
    }
  });
}

// Simulamos el funcionamiento del webservice donde devolvemos los avisos del usuario.
function webServiceGetUserAdvises(userNameInput){
  var listaAvisos = JSON.parse(localStorage.listAdvises);
	for (var index = 0; index < listaAvisos.length; ++index) {
		var user = listaAvisos[index];
		if(user.name == userNameInput){
      var userInfo = JSON.parse(localStorage.userInfo);
			userInfo.avisos = user.avisos;
      localStorage.userInfo = JSON.stringify(userInfo);
			return true;
		}
	}
	return false;
}

// Obtenemos todos los tramites del servidor.
function getUsersTramites(){
  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/1bfhxj",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",

    success: function(data){
      var status = data.status;
      localStorage.listTramites = JSON.stringify(data.usuarios);
      localStorage.tramitesLoaded = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con los avisos de usuarios.");
    }
  });
}

// Simulamos el funcionamiento del webservice donde devolvemos los tramites del usuario.
function webServiceGetUserTramites(userNameInput){
  var listaTramites = JSON.parse(localStorage.listTramites);
	for (var index = 0; index < listaTramites.length; ++index) {
		var user = listaTramites[index];
		if(user.name == userNameInput){
      var userInfo = JSON.parse(localStorage.userInfo);
			userInfo.tramites = user.tramites;
      localStorage.userInfo = JSON.stringify(userInfo);
			return true;
		}
	}
	return false;
}

/* Server stub que simula un webservice real */
// Obtenemos todos los usuarios del servidor.
function getAppsServer(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/xft7r",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.listUsers = JSON.stringify(data.usuarios);
      localStorage.usersLoaded = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de usuarios.");
    }
  });
}

function getUsersBooks(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/eedaf",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.listBooks = JSON.stringify(data.usuarios);
      localStorage.booksLoaded = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de usuarios.");
    }
  });
}

// Simulamos el funcionamiento del webservice del server donde comprueba si existe el usuario.
function webServiceGetUserBooks(userNameInput){
  var listaLibros = JSON.parse(localStorage.listBooks);
	for (var index = 0; index < listaLibros.length; ++index) {
		var user = listaLibros[index];
		if(user.name == userNameInput){
			var userInfo = JSON.parse(localStorage.userInfo);
			userInfo.libros = user.libros;
			localStorage.userInfo = JSON.stringify(userInfo);
			return true;
		}
	}
	return false;
}
