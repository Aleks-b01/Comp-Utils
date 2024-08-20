// This file is dedicated to only the buttons in the main menu and the ones that take you to the main menu
document.addEventListener('DOMContentLoaded', function() {

const menu = document.getElementById('menu');
const calc = document.getElementById('calc');
const calcdiv = document.getElementById('calcdiv');
const scramble = document.getElementById('scramble');
const scramblediv = document.getElementById('scramlediv');
const algs = document.getElementById('algs');
const helpers = document.getElementById('helpers');
const helpersdiv = document.getElementById('helpersdiv');
const competitiongroups = document.getElementById('competitiongroups');
const wcalive = document.getElementById('wcalive');
const settings = document.getElementById('settings');
const settingsmenu = document.getElementById('settingsmenu');
const menubutton = document.getElementById('menubutton');
const menubuttonsettings = document.getElementById('menubuttonsettings');

calc.onclick = function() {
	menu.style.display = 'none';
	calcdiv.style.display = 'flex';
	menubutton.style.visibility = 'visible';
};

scramble.onclick = function() {
	menu.style.display = 'none';
	scramblediv.style.display = 'flex';
	menubutton.style.visibility = 'visible';
};

helpers.onclick = function() {
	menu.style.display = 'none';
	helpersdiv.style.display = 'inline'; // will def change this when I'll actually build helpersdiv
	menubuttonsettings.style.visibility = 'visible';
};

competitiongroups.onclick = function() {
	window.open("https://www.competitiongroups.com/", "_blank");
};

wcalive.onclick = function() {
	window.open("https://live.worldcubeassociation.org/", "_blank");
};

settings.onclick = function() {
	menu.style.display = 'none';
	settingsmenu.style.display = 'inline'; // will also change this when i build the settings
	menubuttonsettings.style.visibility = 'visible';
};

menubutton.onclick = function() {
	menu.style.display = 'flex';
	calcdiv.style.display = 'none';
	menubutton.style.visibility = 'hidden';
};

menubuttonsettings.onclick = function() {
	menu.style.display = 'flex';
	settingsmenu.style.display = 'none';
	menubuttonsettings.style.visibility = 'hidden';
};
});
