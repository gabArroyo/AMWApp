function webPost(user, pass){
	$.ajax({
		type: "POST",
		URL: "http://upf.angeldiaz.es/aism2016_17/ws/autenticacio/0/",
		data: {'grup':user, 'motdepas':pass},
		contentType: "application/json charset=utf-8",
		dataType: "json",
		success: function(data){
			console.log("success")
		}
		
		
	})
}