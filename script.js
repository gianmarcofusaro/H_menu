var btn = document.getElementById ("navigation");

var menuTog = document.getElementById ("menuToggle");

document.getElementById("navigation").addEventListener("click", close);


function close(){
	menuToggle.classList.toggle("containerActive");
}
