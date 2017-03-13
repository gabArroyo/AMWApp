sessionStorage.setItem("usersLoaded", false); // Usuarios cargados.
sessionStorage.setItem("listUsers", null); // Lista de usuarios.
sessionStorage.setItem("advisesLoaded", false); // Avisos del usuario cargados.
sessionStorage.setItem("listAdvises", null); // Lista de avisos JSON.
sessionStorage.setItem("tramitesLoaded", false); // Tramites cargados.
sessionStorage.setItem("listTramites", null); // Lista de tramites.


sessionStorage.setItem("librosBiblioteca", false); //Libros de la biblioteca.
sessionStorage.setItem("booksBiblioteca", null); // Lista de libros.

sessionStorage.setItem("booksLoaded", false); // Libros cargados.
sessionStorage.setItem("listBooks", null); // Lista de libros.
sessionStorage.setItem("userInfo", null);

sessionStorage.setItem("appsLoaded", false); // Apps cargados.
sessionStorage.setItem("listApps", null); // Lista de usuarios.

getUsersServer();
getUsersAvisos();
getUsersTramites();
getUsersBooks();
