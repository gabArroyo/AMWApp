function loadBooks(){
  if(librosBiblioteca == false)
    getBooks();
}

function getBooks(){
	$.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/eedaf",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    async: false,
    dataType: "json",
    success: function(data){
      var status = data.status;
      localStorage.librosBiblioteca = JSON.stringify(data.biblioteca);
      localStorage.booksBiblioteca = true;
    },
    failure: function(errMsg){
      alert("Error durante la comunicación con la base de usuarios.");
    }
  });
}
