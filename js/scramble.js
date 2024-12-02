document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const scrambleEvent = document.getElementsByClassName('scrambleEvent');
const nextScramble = document.getElementById('nextScramble');
const scrambleSelect = document.getElementById('scrambleSelect');
const scrambleSelectBtn = document.getElementById('scrambleSelectBtn');
const e222 = document.getElementById('e222');
const e333 = document.getElementById('e333');
const e444 = document.getElementById('e444');
const e555 = document.getElementById('e555');
const e666 = document.getElementById('e666');
const e777 = document.getElementById('e777');
const e3oh = document.getElementById('e3oh');
const e3bld = document.getElementById('e3bld');
const e3fm = document.getElementById('e3fm');
const e3mbld = document.getElementById('e3mbld');
const epyra = document.getElementById('epyra');
const eskewb = document.getElementById('eskewb');
const esq1 = document.getElementById('esq1');
const emgmx = document.getElementById('emgmx');
const eclock = document.getElementById('eclock');
const e4bld = document.getElementById('e4bld');
const e5bld = document.getElementById('e5bld');

let currentEvent = 3; // NxN = N | 3OH, 3BLD, 3FM, 3MBLD = 33, 333, 3333, 33333 | Pyra, Skewb, Sq1, Mega, Clock = 10, 11, 12, 13, 14 | 4BLD, 5BLD = 444, 555
let currentScramble;
let temp;
let len;
let m1; // 1, 2 ,3 ,4 ,5 ,6 = U, D, R, L, F, B
let m2; // 1, 2, 3 = Normal, ', 2

function handleShortcut(event) {
	if ((event.key === "" || event.key === "Enter")) {
		event.preventDefault();
		scramble();
	}
};

function scramble2() {
	len = Math.floor(Math.random() * 4) + 8;
	m1 = Math.floor(Math.random() * 6) + 1;
	m2 = Math.floor(Math.random() * 3) + 1;
	if (m1 == 1 && m2 == 1) {
		currentScramble = "U";
	} else if (m1 == 1 && m2 == 2) {
		currentScramble = "U'";
	} else if (m1 == 1 && m2 == 3) {
		currentScramble = "U2";
	} else if (m1 == 2 && m2 == 1) {
		currentScramble = "D";
	} else if (m1 == 2 && m2 == 2) {
		currentScramble = "D'";
	} else if (m1 == 2 && m2 == 3) {
		currentScramble = "D2";
	} else if (m1 == 3 && m2 == 1) {
		currentScramble = "R";
	} else if (m1 == 3 && m2 == 2) {
		currentScramble = "R'";
	} else if (m1 == 3 && m2 == 3) {
		currentScramble = "R2";
	} else if (m1 == 4 && m2 == 1) {
		currentScramble = "L";
	} else if (m1 == 4 && m2 == 2) {
		currentScramble = "L'";
	} else if (m1 == 4 && m2 == 3) {
		currentScramble = "L2";
	} else if (m1 == 5 && m2 == 1) {
		currentScramble = "F";
	} else if (m1 == 5 && m2 == 2) {
		currentScramble = "F'";
	} else if (m1 == 5 && m2 == 3) {
		currentScramble = "F2";
	} else if (m1 == 6 && m2 == 1) {
		currentScramble = "B";
	} else if (m1 == 6 && m2 == 2) {
		currentScramble = "B'";
	} else if (m1 == 6 && m2 == 3) {
		currentScramble == "B2";
	}
	while (len > 0) {
		m2 = Math.floor(Math.random() * 3) + 1;
		switch (m1) {
			case 1:
			case 2:
				m1 = Math.floor(Math.random() * 4) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble.concat(" R");
				} else if (m1 == 1 && m2 == 2) {
					currentScramble.concat(" R'");
				} else if (m1 == 1 && m2 == 3) {
					currentScramble.concat(" R2");
				} else if (m1 == 2 && m2 == 1) {
					currentScramble.concat(" L");
				} else if (m1 == 2 && m2 == 2) {
					currentScramble.concat(" L'");
				} else if (m1 == 2 && m2 == 3) {
					currentScramble.concat(" L2");
				} else if (m1 == 3 && m2 == 1) {
					currentScramble.concat(" F");
				} else if (m1 == 3 && m2 == 2) {
					currentScramble.concat(" F'");
				} else if (m1 == 3 && m2 == 3) {
					currentScramble.concat(" F2");
				} else if (m1 == 4 && m2 == 1) {
					currentScramble.concat(" B");
				} else if (m1 == 4 && m2 == 2) {
					currentScramble.concat(" B'");
				} else if (m1 == 4 && m2 == 3) {
					currentScramble.concat(" B2");
				}
				break;
			case 3:
			case 4:
				m1 = Math.floor(Math.random() * 4) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble.concat(" U");
				} else if (m1 == 1 && m2 == 2) {
					currentScramble.concat(" U'");
				} else if (m1 == 1 && m2 == 3) {
					currentScramble.concat(" U2");
				} else if (m1 == 2 && m2 == 1) {
					currentScramble.concat(" D");
				} else if (m1 == 2 && m2 == 2) {
					currentScramble.concat(" D'");
				} else if (m1 == 2 && m2 == 3) {
					currentScramble.concat(" D2");
				} else if (m1 == 3 && m2 == 1) {
					currentScramble.concat(" F");
				} else if (m1 == 3 && m2 == 2) {
					currentScramble.concat(" F'");
				} else if (m1 == 3 && m2 == 3) {
					currentScramble.concat(" F2");
				} else if (m1 == 4 && m2 == 1) {
					currentScramble.concat(" B");
				} else if (m1 == 4 && m2 == 2) {
					currentScramble.concat(" B'");
				} else if (m1 == 4 && m2 == 3) {
					currentScramble.concat(" B2");
				}
				break;
			case 5:
			case 6:
				m1 = Math.floor(Math.random() * 4) + 1;
				if (m1 == 1 && m2 == 1) {
					currentScramble.concat(" U");
				} else if (m1 == 1 && m2 == 2) {
					currentScramble.concat(" U'");
				} else if (m1 == 1 && m2 == 3) {
					currentScramble.concat(" U2");
				} else if (m1 == 2 && m2 == 1) {
					currentScramble.concat(" D");
				} else if (m1 == 2 && m2 == 2) {
					currentScramble.concat(" D'");
				} else if (m1 == 2 && m2 == 3) {
					currentScramble.concat(" D2");
				} else if (m1 == 3 && m2 == 1) {
					currentScramble.concat(" R");
				} else if (m1 == 3 && m2 == 2) {
					currentScramble.concat(" R'");
				} else if (m1 == 3 && m2 == 3) {
					currentScramble.concat(" R2");
				} else if (m1 == 4 && m2 == 1) {
					currentScramble.concat(" L");
				} else if (m1 == 4 && m2 == 2) {
					currentScramble.concat(" L'");
				} else if (m1 == 4 && m2 == 3) {
					currentScramble.concat(" L2");
				}
				break;
		}
		len--;
	}
};

function scramble() {
	switch (currentEvent) {
		case 2:
			scramble2();
			break;
		case 3:
			scramble3();
			break;
		case 4:
			cramble4();
			break;
		case 5:
			scramble5();
			break;
		case 6:
			scramble6();
			break;
		case 7:
			scramble7();
			break;
		case 33:
			scramble3OH();
			break;
		case 333:
			scramble3BLD();
			break;
		case 3333:
			scramble3FM();
			break;
		case 33333:
			scrambleMBLD();
			break;
		case 10:
			scramblePyra();
			break;
		case 11:
			scrambleSkewb();
			break;
		case 12:
			scrambleSq1();
			break;
		case 13:
			scrambleMega();
			break;
		case 14:
			scrambleClock();
			break;
		case 44:
			scramble4BLD();
			break;
		case 55:
			scramble5BLD();
			break;
	}
};

e222.onclick = function() {
	currentEvent = 2;
	scramble();
};

e333.onclick = function() {
	currentEvent = 3;
	scramble();
};

e444.onclick = function() {
	currentEvent = 4;
	scramble();
};

e555.onclick = function() {
	currentEvent = 5;
	scramble();
};

e666.onclick = function() {
	currentEvent = 6;
	scramble();
};

e777.onclick = function() {
	currentEvent = 7;
	scramble();
};

e3oh.onclick = function() {
	currentEvent = 33;
	scramble();
};

e3bld.onclick = function() {
	currentEvent = 333;
	scramble();
};

e3fm.onclick = function() {
	currentEvent = 3333;
	scramble();
};

e3mbld.onclick = function() {
	currentEvent = 33333;
	scramble();
};

epyra.onclick = function() {
	currentEvent = 10;
	scramble();
};

eskewb.onclick = function() {
	currentEvent = 11;
	scramble();
};

esq1.onclick = function() {
	currentEvent = 12;
	scramble();
};

emgmx.onclick = function() {
	currentEvent = 13;
	scramble();
};

eclock.onclick = function() {
	currentEvent = 14;
	scramble();
};

e4bld.onclick = function() {
	currentEvent = 44;
	scramble();
};

e5bld.onclick = function() {
	currentEvent = 55;
	scramble();
};

});
