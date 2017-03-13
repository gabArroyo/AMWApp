loadUserInfo();

function loadUserInfo(){
  var user = JSON.parse(localStorage.userInfo);
  user = JSON.parse(localStorage.userInfo);

  document.getElementById('name').value = user.name;

  $('#name').text(user.name);
  $("#avatar").attr("src", user.img);
  $('#avisos').text("Avisos: " + user.avisos.length);
}
