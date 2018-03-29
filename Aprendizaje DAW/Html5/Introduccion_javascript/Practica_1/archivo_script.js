// JavaScript Document

function ejecuta() {
	/*
	for (var i=0; i<3; i++) {
		document.getElementsByTagName("p")[i].onclick=advertencia();
	}
	*/
	
	/*document.getElementById("i_importante").onclick=saludo();*/
	
	for (var i=0; i<2; i++) {
		document.getElementsByClassName("c_importante")[i].onclick=advertencia();
	}
}

function advertencia() {
	alert("En pos de cada elemento");
}

function saludo() {
	alert("Hola, Que hay de nuevo");
}

window.onload=ejecuta();

