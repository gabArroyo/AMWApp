// Listado de usuarios
localStorage.setItem("usersLoaded", false); // Usuarios cargados.
localStorage.setItem("listUsers", null); // Lista de usuarios.

// Información del usuario.
localStorage.setItem("userInfo", null);

// Avisos de los usuarios.
localStorage.setItem("advisesLoaded", false); // Avisos del usuario cargados.
localStorage.setItem("listAdvises", null); // Lista de avisos JSON.
// Trámites de los usuarios.
localStorage.setItem("tramitesLoaded", false); // Tramites cargados.
localStorage.setItem("listTramites", null); // Lista de tramites.
// Libros que tienen los usuarios.
localStorage.setItem("booksLoaded", false); // Libros cargados.
localStorage.setItem("listBooks", null); // Lista de libros.



// Apps para descargar.
localStorage.setItem("appsLoaded", false); // Apps cargados.
localStorage.setItem("listaApps", null); // Lista de apps.

// Eventos.
localStorage.setItem("eventosLoaded", false); // Apps cargados.
localStorage.setItem("listaEventos", null); // Lista de apps.


// Libros de la biblioteca.
localStorage.setItem("librosBiblioteca", false); //Libros de la biblioteca.
localStorage.setItem("booksBiblioteca", null); // Lista de libros.


// Obtenemos la lista de usuarios, avisos, tramites y libros de los usuarios.
// Esto simula los diversos webservices de nuestra app, que, en este caso, se realizan al inicio.
// Los webservices posteriores obtenien la información del usuario especifico.
getUsersServer();
getUsersAvisos();
getUsersTramites();
getUsersBooks();
