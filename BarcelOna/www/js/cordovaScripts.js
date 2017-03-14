// Llamada a número de teléfono.
function phoneCall(number){
  window.plugins.CallNumber.callNumber(onSuccess, onError, number, true);
}

function onSuccess(result){
  alerta("Éxito al realizar la llamada.");
  console.log(result);
}

function onError(result) {
  alerta("Error al realizar la llamada.")
  console.log("Error: " + result);
}
