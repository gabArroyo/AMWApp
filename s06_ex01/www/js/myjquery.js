


document.addEventListener('deviceready', updateDeviceInfo, false);

function updateDeviceInfo() {
	$("span#version").html(device.cordova);
	$("span#manufacturer").html(device.manufacturer);
	$("span#model").html(device.model);
	$("span#uuid").html(device.uuid);
}