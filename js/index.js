// This file is dedicated to only the main menu functionality
document.addEventListener('DOMContentLoaded', function() {

const menu = document.getElementById('menu');
const calc = document.getElementById('calc');
const calcdiv = document.getElementById('calcdiv');
const scramble = document.getElementById('scramble');
const scramblediv = document.getElementById('scramlediv');
const algs = document.getElementById('algs');
const algsdiv = document.getElementById('algsdiv');
const helpers = document.getElementById('helpers');
const helpersdiv = document.getElementById('helpersdiv');
const competitiongroups = document.getElementById('competitiongroups');
const wcalive = document.getElementById('wcalive');
const settings = document.getElementById('settings');
const settingsmenu = document.getElementById('settingsmenu');
const calcmenubutton = document.getElementById('calcmenubutton');
const scramblemenubutton = document.getElementById('scramblemenubutton');
const algsmenubutton = document.getElementById('algsmenubutton');
const helpersmenubutton = document.getElementById('helpersmenubutton');
const menubuttonsettings = document.getElementById('menubuttonsettings');
const css = document.getElementsByTagName('link');
const reset = document.getElementById('resetbutton');

const screenwidth = screen.width;

window.onload = function() {
	if (screenwidth > 600) {
		css[0].setAttribute('href', 'index.css');
	} else if (screenwidth <= 600) {
		css[0].setAttribute('href', 'mobile.css');
	}
};

calc.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	calcdiv.style.display = 'flex';
	calcmenubutton.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
	reset.style.visibility = 'visible';
};

scramble.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	scramblediv.style.display = 'flex';
	scramblemenubutton.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
};

algs.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	algsdiv.style.display = 'flex';
	algsmenubutton.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
};

helpers.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	helpersdiv.style.display = 'inline'; // will def change this when I'll actually build helpersdiv
	helpersmenubutton.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
};

competitiongroups.onclick = function() {
	window.open("https://www.competitiongroups.com/", "_blank");
};

wcalive.onclick = function() {
	window.open("https://live.worldcubeassociation.org/", "_blank");
};

settings.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	settingsmenu.style.display = 'inline'; // will also change this when i build the settings
	menubuttonsettings.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
};

calcmenubutton.onclick = function() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	calcdiv.style.display = 'none';
	calcmenubutton.style.visibility = 'collapse';
	settings.style.visibility = 'visible';
	reset.style.visibility - 'collapse';
};
`
scramblemenubutton.onclick = function() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	scramblediv.style.display = 'none';
	scramblemenubutton.style.visibility = 'collapse';
	settings.style.visibility = 'visible';
};

algsmenubutton.onclick = function() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	algsdiv.style.display = 'none';
	algsmenubutton.style.visibility = 'collapse';
	settings.style.visibility = 'visible';
};

helpersmenubutton.onclick = function() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	helpersdiv.style.display = 'none';
	helpersmenubutton.style.visibility = 'collapse';
	settingss.style.visibility = 'visible';
};

menubuttonsettings.onclick = function() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	settingsmenu.style.display = 'none';
	menubuttonsettings.style.visibility = 'collapse';
	settings.style.visibility = 'visible';
};`
});
