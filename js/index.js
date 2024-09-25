// This file is dedicated to only the main menu functionality
document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const menu = document.getElementById('menu');
const calc = document.getElementById('calc');
const calcdiv = document.getElementById('calcdiv');
const scramble = document.getElementById('scramble');
const scramblediv = document.getElementById('scramblediv');
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
const settingsmenubutton = document.getElementById('settingsmenubutton');
const css = document.getElementsByTagName('link');
const lxa = document.getElementById('lxa');
const hbody = document.getElementById('hbody');

const screenwidth = screen.width;

let lxam = 1;

window.onload = function() {
	if (screenwidth > 600) {
		css[0].setAttribute('href', 'index.css');
	} else if (screenwidth <= 600) {
		css[0].setAttribute('href', 'mobile.css');
	}
};

function handleShortcut(event) {
	if (event.key === "Escape" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		exitCalc();
	} else if (event.key === "Escape" && scramblediv.style.display === 'flex') {
		event.preventDefault();
		exitScramble();
	} else if (event.key === "Escape" && algsdiv.style.display === 'flex') {
		event.preventDefault();
		exitAlgs();
	} else if (event.key === "Escape" && helpersdiv.style.display === 'flex') {
		event.preventDefault();
		exitHelper();
	} else if (event.key === "Escape" && settingsmenu.style.display === 'flex') {
		event.preventDefault();
		exitSettings();
	}
};

lxa.onclick = function() {
	if (lxam == 1) {
		hbody.style.backgroundColor = 'white';
		lxa.innerText = 'L';
		lxam = 2;
	} else if (lxam == 2) {
		hbody.style.backgroundColor = 'rgb(47, 52, 56)';
		lxa.innerText = 'D';
		lxam = 1;
	}
}

calc.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	calcdiv.style.display = 'flex';
	settings.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

scramble.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	scramblediv.style.display = 'flex';
	settings.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

algs.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	algsdiv.style.display = 'flex';
	settings.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

helpers.onclick = function() {
	menu.style.display = 'none';
	topmenu.style.display = 'none';
	helpersdiv.style.display = 'inline'; // will def change this when I'll actually build helpersdiv
	settings.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
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
	settingsmenubutton.style.visibility = 'visible';
	settings.style.visibility = 'collapse';
	lxa.style.visibility = 'collapse';
};

calcmenubutton.onclick = function() {
	exitCalc();
};

function exitCalc() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	calcdiv.style.display = 'none';
	settings.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

scramblemenubutton.onclick = function() {
	exitScramble();
};

function exitScramble() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	scramblediv.style.display = 'none';
	settings.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

algsmenubutton.onclick = function() {
	exitAlgs();
};

function exitAlgs() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	algsdiv.style.display = 'none';
	settings.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

helpersmenubutton.onclick = function() {
	exitHelper();
};

function exitHelper() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	helpersdiv.style.display = 'none';
	settingss.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};

settingsmenubutton.onclick = function() {
	exitSettings();
};

function exitSettings() {
	menu.style.display = 'flex';
	topmenu.style.display = 'flex';
	settingsmenu.style.display = 'none';
	settingsmenubutton.style.visibility = 'collapse';
	settings.style.visibility = 'visible';
	lxa.style.visibility = 'visible';
};
});
