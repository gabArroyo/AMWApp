function webPost(user, pass){
	$.ajax({
		type: "POST",
		URL: "http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/",
		data: {'grup':user, 'motdepas':pass},
		contentType: "application/json charset=utf-8",
		dataType: "json",
		success: function(data){
			console.log("success");
			alert(data);
		}
		failure: function(errorMsg){
			console.log("error"),
			alert(errorMsg);
		}
	});
}

function onDeviceReady(){
	console.log("YOLOOOOOOOOOOOOOOOOOO");
	console.log("WHAT DE HECK");
}

document.addEventListener("devideReady", onDeviceReady, true);