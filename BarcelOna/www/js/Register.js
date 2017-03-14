// Realizamos un registro.
function doRegister(){
	if (localStorage.usersLoaded == "false")
		alert("Error en la carga de usuarios.")

	var userNameInput = document.getElementById('user').value;
	var passInput = document.getElementById('pass').value;
	var repeatPass = document.getElementById('repeatPass').value;
	var email =  document.getElementById('email').value;

	if (passInput != repeatPass)
		alert("La contraseña insertada no coincide con la repetida.");
	else if(email.includes("@") == false)
		alert("El email introducido no es correcto, falta el dominio.");
	else{
		var userFound = webServiceCheckIfUserExists(userNameInput, passInput);
		if (userFound){
			document.location.href = "registerError.html";
		}
		else {
			var userInfo = {
				name: userNameInput,
				img: "img/avatar/avatarDefault.png",
				avisos: []
			};
			localStorage.userInfo = JSON.stringify(userInfo);
			webServiceGetUserAdvises(userNameInput);
			document.location.href = "menu.html";
		}
	}
}
