// JavaScript Document

function ejecuta() {
	var elementos = document.querySelectorAll("#i_contenedor p");
	elementos[0].onclick=saludo();
}

function saludo() {
	alert("Hola, Que hay de nuevo");
}

window.onload=ejecuta();

