function muestraReloj() {
	var fechaHora = new Date();
	var dia = fechaHora.getDay();
	var mes = fechaHora.getMonth();
	var anys = fechaHora.getYear();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();

	if(dia < 10) {
		dia = '0' + dia;
	}
	if(mes < 10) {
		mes = '0' + mes;
	}
	if(horas < 10) {
		horas = '0' + horas;
	}
	if(minutos < 10) {
		minutos = '0' + minutos;
	}

	anys = '2' + anys - 100;

	document.getElementById("reloj").innerHTML = dia+'/'+mes+'/'+anys+' '+horas+':'+minutos;
}

window.onload = function() {
  setInterval(muestraReloj);
}
