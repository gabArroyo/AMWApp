function doLogin(){
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
			success = data.status.success
			if (success != true)
				alert(retornarErrorAuthenticate(data));
			else{

				darreraAutentic = data.status.data.darrera_autenticacio;
				identificadorGrup =  data.status.data.identificador_grup;
				integrants =  data.status.data.integrants;
				document.getElementById("contenidoLogin").innerHTML = "<p> Ultima autenticación: " + darreraAutentic + " </p>\
				<p>Identificador: " + identificadorGrup + " </p><p> Integrantes: " + integrants + " </p>";
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
