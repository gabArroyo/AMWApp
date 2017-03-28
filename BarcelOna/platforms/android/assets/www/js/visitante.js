// Simula la entrada como visitante.
function entrarVisitante(){
	var userInfo = {
		name: "Visitante",
		img: "img/avatar/avatarDefault.png",
		avisos: []
	};
	localStorage.userInfo = JSON.stringify(userInfo);
	document.location.href = "menu.html";
	webServiceGetUserAdvises(userNameInput);
}

function ifVisitanteHideServicios(){
	var user = JSON.parse(localStorage.userInfo);
	if(user.name == "Visitante"){
		$("#recogidaMuebles").hide();
		$("#tramites").hide();
	}
}
