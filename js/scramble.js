document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);
import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";

const scramble = document.getElementById('scramble');
const nextScramble = document.getElementById('nextScramble');
const scrambleSelectBtn = document.getElementById('scrambleSelectBtn');
const scrambleText = document.getElementById('scrambleText');
const scrambleSelect = document.getElementById('scrambleSelect');
const e222 = document.getElementById('e222');
const e333 = document.getElementById('e333');
const e444 = document.getElementById('e444');
const e555 = document.getElementById('e555');
const e666 = document.getElementById('e666');
const e777 = document.getElementById('e777');
const e3oh = document.getElementById('e3oh');
const e3bld = document.getElementById('e3bld');
const e3fm = document.getElementById('e3fm');
const epyra = document.getElementById('epyra');
const eskewb = document.getElementById('eskewb');
const esq1 = document.getElementById('esq1');
const emgmx = document.getElementById('emgmx');
const eclock = document.getElementById('eclock');
const e4bld = document.getElementById('e4bld');
const e5bld = document.getElementById('e5bld');

let currentevent = 3 // 33 = oh, 333 = bld, 3333 = fmc, 44/55 = 4/5bld, 8/9/10/11/12 = pyra/skewb/squan/mega/clock
let scramble;

function handleShortcut(event) {
	if ((event.key === "Enter" || event.key === " ") && scramble.style.display === 'flex') {
		event.preventDefault();
		genScramble();
	} else if (event.key === "Escape" && scrambleSelect.style.display === 'flex') {
		event.preventDefault();
		scrambleSelect.style.display = 'none';
	}
};

scrambleSelectBtn.onclick = function() {
	scrambleSelect.style.display = 'flex';
};

e222.onclick = function() {
	if (currentevent != 2) {
		currentevent = 2;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e333.onclick = function() {
	if (currentevent != 3) {
		currentevent = 3;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e444.onclick = function() {
	if (currentevent != 4) {
		currentevent = 4;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e555.onclick = function() {
	if (currentevent != 5) {
		currentevent = 5;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e666.onclick = function() {
	if (currentevent != 6) {
		currentevent = 6;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e777.onclick = function() {
	if (currentevent != 7) {
		currentevent = 7;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e3oh.onclick = function() {
	if (currentevent != 33) {
		currentevent = 33;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e3bld.onclick = function() {
	if (currentevent != 333) {
		currentevent = 333;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e3fm.onclick = function() {
	if (currentevent != 3333) {
		currentevent = 3333;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

epyra.onclick = function() {
	if (currentevent != 8) {
		currentevent = 8;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

eskewb.onclick = function() {
	if (currentevent != 9) {
		currentevent = 9;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

esq1.onclick = function() {
	if (currentevent != 10) {
		currentevent = 10;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

emgmx.onclick = function() {
	if (currentevent != 11) {
		currentevent = 11;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

eclock.onclick = function() {
	if (currentevent != 12) {
		currentevent = 12;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e4bld.onclick = function() {
	if (currentevent != 44) {
		currentevent = 44;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

e5bld.onclick = function() {
	if (currentevent != 55) {
		currentevent = 55;
		scrambleSelect.style.display = 'none';
		genScramble();
	} else {
		scrambleSelect.style.display = 'none';
	}
};

function genScramble() {
	switch (currentevent) {
		case 2:
			scramble = await randomScrambleForEvent("222");
			scrambleText.innerText = scramble;
		case 3:
			scramble = await randomScrambleForEvent("333");
			scrambleText.innerText = scramble;
		case 4:
			scramble = await randomScrambleForEvent("444");
			scrambleText.innerText = scramble;
		case 5:
			scramble = await randomScrambleForEvent("555");
			scrambleText.innerText = scramble;
		case 6:
			scramble = await randomScrambleForEvent("666");
			scrambleText.innerText = scramble;
		case 7:
			scramble = await randomScrambleForEvent("777");
			scrambleText.innerText = scramble;
		case 33:
			scramble = await randomScrambleForEvent("333");
			scrambleText.innerText = scramble;
		case 333:
			scramble = await randomScrambleForEvent("333bf");
			scrambleText.innerText = scramble;
		case 3333:
			scramble = await randomScrambleForEvent("333fm");
			scrambleText.innerText = scramble;
		case 8:
			scramble = await randomScrambleForEvent("pyra");
			scrambleText.innerText = scramble;
		case 9:
			scramble = await randomScrambleForEvent("skewb");
			scrambleText.innerText = scramble;
		case 10:
			scramble = await randomScrambleForEvent("sq1");
			scrambleText.innerText = scramble;
		case 11:
			scramble = await randomScrambleForEvent("minx");
			scrambleText.innerText = scramble;
		case 12:
			scramble = await randomScrambleForEvent("clock");
			scrambleText.innerText = scramble;
		case 44:
			scramble = await randomScrambleForEvent("444bf");
			scrambleText.innerText = scramble;
		case 55:
			scramble = await randomScrambleForEvent("555bf");
			scrambleText.innerText = scramble;
	}
	;
};
});
