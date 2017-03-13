function doLogin(){
	if (localStorage.usersLoaded == false)
		alert("Error en la carga de usuarios.")

	var userNameInput = document.getElementById('user').value;
	var passInput = document.getElementById('pass').value;

	var userFound = webServiceCheckIfUserExists(userNameInput, passInput);
	if (userFound){
		webServiceGetUserAdvises(userNameInput);
		webServiceGetUserTramites(userNameInput);
		webServiceGetUserBooks(userNameInput);
		document.location.href = "menu.html";
	}
	else {
		alert("El usuario no se encuentra registrado.")
	}
}
