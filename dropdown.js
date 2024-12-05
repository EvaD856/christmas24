// JavaScript Document

// Toggles dropdown when button clicked //
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Closes dropdown menu if user clicks off it //
window.onclick = function(event) {
	if (!event.target.mathes('dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.remove('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}
