function getRegisterDataAndDoCallWebServices(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var nias = ["u"+document.getElementById('NIA1').value, "u"+document.getElementById('NIA2').value];
	webServiceRegister(user, pass, nias);
}

function webServiceRegister(user, pass, nias){
	$.ajax({
		type: "POST",
		url: "http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/registre",
		data: {"grup": user, "motdepas": pass, "nias": nias},
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		success: function(data){
			window.location = "Entrar.html";
			$("#datosLoginORegistro").replaceWith( "<h2>New heading</h2>" );
			succes = data.status.succes;
            if (succes != true)
				alert(retornarErrorRegister(data));
			else{
				registered = data.status.data.registered;
			}
		},
		failure: function(errMsg){
			alert("Error durante la comunicación con: http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/registre\n"
			+ "Mensaje de Error: " + errMsg);
		}
	});
}

function retornarErrorRegister(data){
	error = data.status.error;
	if (error == 1)
		return "Missing parameters.";
	else if (error == 2)
		return "Invalid group identifier.";
	else if (error == 3)
		return "Invalid password.";
	else if (error == 4)
		return "Invalid nias.";
	else if (error == 5)
		return "Group identifier already registered.";
	else if(error == 6)
		return "SQL error.";
	else
		return "Other errors.";
}

function getLoginDataAndDoCallWebServices(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;	
	var data = webServiceAuthenticate(user, pass);
}

function webServiceAuthenticate(user, pass){
	var datosAEnviar = {
		"grup": user, "motdepas": pass
	};
	$.ajax({
		type: "POST",
		url: "http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/login",
		data: datosAEnviar,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		success: function(data){
			succes = data.status.succes
			if (succes != true)
				alert(retornarErrorAuthenticate(data));
			else{
				darreraAutentic = data.status.data.darrera_autenticacio;
				identificadorGrup =  data.status.data.identificador_grup;
				integrants =  data.status.data.integrants;
			}
		},
		failure: function(errMsg){
			alert("Error durante la comunicación con: http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/login\n"
			+ "Mensaje de Error: " + errMsg);
		}
	});
}

function retornarErrorAuthenticate(data){
	error = data.status.error;
	if (error == 1)
		return "Missing parameters.";
	else if (error == 2)
		return "Invalid group identifier.";
	else if (error == 3)
		return "Invalid password.";
	else if (error == 4)
		return "Server error";
	else
		return "Unknown error";
}

function onDeviceReady(){
	//webServiceAuthenticate("03", "qwerty");
	webServiceRegister('03', 'AAA',["u111", "u222"]);
}

$(document).ready(function(){
	onDeviceReady();
})



//document.addEventListener("deviceReady", onDeviceReady, false);
