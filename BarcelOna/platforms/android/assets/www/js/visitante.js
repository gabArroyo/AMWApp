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
