document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const time4 = document.getElementById('time4');
const time5 = document.getElementById('time5');
const timein = document.getElementById('timein');
const best = document.getElementById('best');
const worst = document.getElementById('worst');
const bpa = document.getElementById('bpa');
const wpa = document.getElementById('wpa');
const target = document.getElementById('target');
const avg = document.getElementById('avg');
const settarget = document.getElementById('settarget');
const settingsmenu = document.getElementById('settingsmenu');
const calcdiv = document.getElementById('calcdiv');
const menubutton = document.getElementById('menubutton');
const targetavgbutton = document.getElementById('targetavgbutton');
const currenttarget = document.getElementById('currenttarget');
const formatsh = document.getElementById('formatsh');
const formatop = document.getElementById('formatop');
const formatop1 = document.getElementById('formatop1');
const formatop2 = document.getElementById('formatop2');
const ok = document.getElementById('OK');
const p2 = document.getElementById('P2');
const dnf = document.getElementById('DNF');
const resetb = document.getElementById('resetbutton');
const deleteb = document.getElementById('deleteb');

let temp = 0;
let tempstring = '';
let timetemp = '';
let timetempstring = '';
let time = [];
let timebig = [];
let timebigcount = 0;
let timepenalty = [1, 1, 1, 1, 1];
let timednf = [0, 0, 0, 0, 0];
let bpax = 0;
let wpax = 0;
let avgx = 0;
let bestx = 0;
let worstx = 0;
let targetx = 0;
let targetxstring = '';
let targetavg = 0;
let timecount = -1;
let zero = 0;
let bpaxbig = 0;
let wpaxbig = 0;
let targetxbig = 0;
let targetavgbig = 0;
let targetavgstring = '';
let avgxbig = 0;
let bestplace = 0;
let worstplace = 0;
let format = 1;

// Keybinds
function handleShortcut(event) {
	if (event.key === "Enter" && document.activeElement === timein) {
		event.preventDefault();
		getTime();
	} else if (event.key === "Enter" && document.activeElement === targetin) {
		event.preventDefault();
		getTargetAVG();
	} else if (event.ctrlKey && event.key === "1" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		timeOK();
	} else if (event.ctrlKey && event.key === "2" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		timePlus2();
	} else if (event.ctrlKey && event.key === "3" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		timeDNF();
	} else if (event.ctrlKey && (event.key === "r" || event.key === "R") && calcdiv.style.display === 'flex') {
		event.preventDefault();
		reset();
	} else if (event.ctrlKey && (event.key === "z" || event.key === "Z") && calcdiv.style.display === 'flex') {
		event.preventDefault();
		deletesolve();
	}
};

// This is split into two functions to allow times to be entered in mm:ss.mc and mmssmc
function getTime() {
	tempstring = timein.value
	if (tempstring.includes(":")) {
		timein.value = '';
		processTime();
	} else if (!tempstring.includes(":") && !timein.value == '') {
		timetemp = Number(timein.value);
		timein.value = '';
		processTime();
	}
};

function processTime() {
	if (((timetemp < 6000 && timetemp > 0) || timetemp >= 10000) && Number.isInteger(timetemp)) {
		temp = timetemp / 100;
		timecount += 1;
		while (temp >= 100) {
			timebigcount += 1;
			temp -= 100;
		}
		let minutes = timebigcount * 60;
		let seconds = temp;
		timetemp = minutes + seconds;
		time.push(timetemp);
		timebig.push(timebigcount);
		timebigcount = 0;
	} else if (timetemp < 60 && timetemp > 0 && !Number.isInteger(timetemp) && !tempstring.includes(":")) {
		time.push(timetemp);
		timecount += 1;
		timebig.push(zero);
	} else if (tempstring.includes(":")) {
		timecount += 1;
		let timesplit = tempstring.split(":");
		let minutes = Number(timesplit[0]);
		let seconds = Number(timesplit[1]);
		timebig.push(minutes);
		timetemp = (minutes * 60) + seconds;
		time.push(Number(timetemp));
		tempstring = '';
	}
	pickFormat();
};

// Chooses between ao5 and mo3 since they behave differently
function pickFormat() {
	if (format == 1) {
		drawTime();
	} else if (format == 2) {
		drawTimeM();
	}
};

function drawTime() {
	if (timecount == 0 && timebig[0] == 0 && checkPenalty() == 1) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
	} else if (timecount == 1 && timebig[1] == 0 && checkPenalty() == 1) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
	} else if (timecount == 2 && timebig[2] == 0 && checkPenalty() == 1) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
	} else if (timecount == 3 && timebig[3] == 0 && checkPenalty() == 1) {
		time4.innerText = '4.  ' + time[3].toFixed(2);
	} else if (timecount == 4 && timebig[4] == 0 && checkPenalty() == 1) {
		time5.innerText = '5.  ' + time[4].toFixed(2);
	} else if (timecount == 0 && timebig[0] > 0 && checkPenalty() == 1) {
		timetemp = time[0] - (timebig[0] * 60);
		time1.innerText = '1.  ' + timebig[0] + ':' + timetemp.toFixed(2);
	} else if (timecount == 1 && timebig[1] > 0 && checkPenalty() == 1) {
		timetemp = time[1] - (timebig[1] * 60);
		time2.innerText = '2.  ' + timebig[1] + ':' + timetemp.toFixed(2);
	} else if (timecount == 2 && timebig[2] > 0 && checkPenalty() == 1) {
		timetemp = time[2] - (timebig[2] * 60);
		time3.innerText = '3.  ' + timebig[2] + ':' + timetemp.toFixed(2);
	} else if (timecount == 3 && timebig[3] > 0 && checkPenalty() == 1) {
		timetemp = time[3] - (timebig[3] * 60);
		time4.innerText = '4.  ' + timebig[3] + ':' + timetemp.toFixed(2);
	} else if (timecount == 4 && timebig[4] > 0 && checkPenalty() == 1) {
		timetemp = time[4] - (timebig[4] * 60);
		time5.innerText = '5.  ' + timebig[4] + ':' + timetemp.toFixed(2);
	} else if (checkPenalty() == 2) {
		drawTimePlus2();
	} else if (checkPenalty() == 3) {
		drawTimeDNF();
	}
	processBest();
};

function drawTimePlus2() {
	if (timecount == 0 && timebig[0] == 0 && checkPenalty() == 2) {
		time1.innerText = '1.  ' + time[0].toFixed(2) + '+';
	} else if (timecount == 1 && timebig[1] == 0 && checkPenalty() == 2) {
		time2.innerText = '2.  ' + time[1].toFixed(2) + '+';
	} else if (timecount == 2 && timebig[2] == 0 && checkPenalty() == 2) {
		time3.innerText = '3.  ' + time[2].toFixed(2) + '+';
	} else if (timecount == 3 && timebig[3] == 0 && checkPenalty() == 2) {
		time4.innerText = '4.  ' + time[3].toFixed(2) + '+';
	} else if (timecount == 4 && timebig[4] == 0 && checkPenalty() == 2) {
		time5.innerText = '5.  ' + time[4].toFixed(2) + '+';
	} else if (timecount == 0 && timebig[0] > 0 && checkPenalty() == 2) {
		timetemp = time[0] - (timebig[0] * 60);
		time1.innerText = '1.  ' + timebig[0] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 1 && timebig[1] > 0 && checkPenalty() == 2) {
		timetemp = time[1] - (timebig[1] * 60);
		time2.innerText = '2.  ' + timebig[1] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 2 && timebig[2] > 0 && checkPenalty() == 2) {
		timetemp = time[2] - (timebig[2] * 60);
		time3.innerText = '3.  ' + timebig[2] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 3 && timebig[3] > 0 && checkPenalty() == 2) {
		timetemp = time[3] - (timebig[3] * 60);
		time4.innerText = '4.  ' + timebig[3] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 4 && timebig[4] > 0 && checkPenalty() == 2) {
		timetemp = time[4] - (timebig[4] * 60);
		time5.innerText = '5.  ' + timebig[4] + ':' + timetemp.toFixed(2) + '+';
	}
};

function drawTimeDNF() {
	if (timecount == 0 && checkPenalty() == 3) {
		time1.innerText = '1.  DNF';
	} else if (timecount == 1 && checkPenalty() == 3) {
		time2.innerText = '2.  DNF';
	} else if (timecount == 2 && checkPenalty() == 3) {
		time3.innerText = '3.  DNF';
	} else if (timecount == 3 && checkPenalty() == 3) {
		time4.innerText = '4.  DNF';
	} else if (timecount == 4 && checkPenalty() == 3) {
		time5.innerText = '5.  DNF';
	}
};

function getTargetAVG() {
	tempstring = targetin.value;
	if (tempstring.includes(":")) {
		targetin.value = '';
		target.style.visibility = 'visible';
		processTargetAVG();
	} else {
		timetemp = Number(targetin.value);
		targetin.value = '';
		target.style.visibility = 'visible';
		processTargetAVG();
	}
};

function processTargetAVG() {
	if ((timetemp < 6000 || timetemp >= 10000) && Number.isInteger(timetemp)) {
		temp = timetemp;
		timetemp = temp / 100;
		while (timetemp >= 100) {
			targetavgbig += 1;
			timetemp -= 100;
		}
		let minutes = targetavgbig * 60;
		let seconds = timetemp;
		targetavg = minutes + seconds;
		targetavgstring = targetavgbig + ':' + timetemp.toFixed(2);
	} else if (timetemp < 60 && !Number.isInteger(timetemp) && !tempstring.includes(":")) {
		targetavg = timetemp;
	} else if (tempstring.includes(":")) {
		let timesplit = tempstring.split(":");
		let minutes = Number(timesplit[0]);
		let seconds = Number(timesplit[1]);
		targetavgstring = minutes + ':' + seconds.toFixed(2);
		targetavg = minutes * 60 + seconds;
		targetavgbig = minutes;
	}
	drawTargetAVG();
};

function drawTargetAVG() {
	if (targetavgbig == 0) {
		currenttarget.innerText = 'Target average:  ' + targetavg;
	} else if (targetavgbig > 0) {
		currenttarget.innerText = 'Target average:  ' + targetavgstring;
	}
};

function processBest() {
	bestx = Math.min(...time);
	bestplace = time.indexOf(bestx);
	if (bestx < 60 && timepenalty[bestplace] == 1) {
		best.innerText = 'Best:  ' + bestx.toFixed(2);
	} else if (bestx >= 60 && bestx < Infinity && timepenalty[bestplace] == 1) {
		timetemp = bestx - timebig[bestplace] * 60;
		best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp.toFixed(2);
	} else if (bestx < 60 && timepenalty[bestplace] == 2) {
		best.innerText = 'Best:  ' + bestx.toFixed(2) + '+';
	} else if (bestx >= 60 && bestx < Infinity && timepenalty[bestplace] == 2) {
		timetemp = bestx - timebig[bestplace] * 60;
		best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp.toFixed(2) + '+';
	} else if (bestx == Infinity) {
		best.innerText = 'Best:  DNF';
		worst.innerText = 'Worst:  DNF';
	}
	processWorst();
};

function processWorst() {
	worstx = Math.max(...time);
	worstplace = time.indexOf(worstx);
	if (worstx < 60 && timepenalty[worstplace] == 1) {
		worst.innerText = 'Worst:  ' + worstx.toFixed(2);
	} else if (worstx >= 60 && worstx < Infinity && timepenalty[worstplace] == 1) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp.toFixed(2);
	} else if (worstx < 60 && timepenalty[worstplace] == 2) {
		worst.innerText = 'Worst:  ' + worstx.toFixed(2) + '+';
	} else if (worstx >= 60 && worstx < Infinity && timepenalty[worstplace] == 2) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp.toFixed(2) + '+';
	} else if (worstx == Infinity) {
		worst.innerText = 'Worst:  DNF';
	}
	processBPA();
};

function processBPA() {
	if (timecount == 3 && worstplace == 0 && (time[1] != 3 || time[2] != 3 || time[3] != 3)) {
		bpax = (time[1] + time[2] + time[3]) / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		} 
	} else if (timecount == 3 && worstplace == 1 && (time[0] != 3 || time[2] != 3 || time[3] != 3)) {
		bpax = (time[0] + time[2] + time[3]) / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		}
	} else if (timecount == 3 && worstplace == 2 && (time[0] != 3 || time[1] != 3 || time[3] != 3)) {
		bpax = (time[0] + time[1] + time[3]) / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		}
	} else if (timecount == 3 && worstplace == 3 && (time[0] != 3 || time[1] != 3 || time[2] != 3)) {
		bpax = (time[0] + time[1] + time[2]) / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		} 
	} else {
		bpax = Infinity;
	}
	drawBPA();
};

function drawBPA() {
	if (bpaxbig == 0 && timecount == 3 && bpax != Infinity) {
		bpa.innerText = 'BPA:  ' + bpax.toFixed(2);
	} else if (bpaxbig > 0 && timecount == 3 && bpax != Infinity) {
		bpa.innerText = 'BPA:  ' + bpaxbig + ':' + bpax.toFixed(2);
	} else if (timecount == 3 && bpax == Infinity) {
		bpa.innerText = 'BPA:  DNF';
	}
	processWPA();
};

function processWPA() {
	if (timecount == 3 && worstx != Infinity) {
		wpax = (time[0] + time[1] + time[2] + time[3] - bestx) / 3;
		while (wpax >= 60) {
			wpaxbig += 1;
			wpax -= 60;
		}
	} else if (timecount == 3 && worstx == Infinity) {
		wpax = Infinity;
	}
	drawWPA();
};

function drawWPA() {
	if (wpaxbig == 0 && timecount == 3 && wpax != Infinity) {
		wpa.innerText = 'WPA:  ' + wpax.toFixed(2)
	} else if (wpaxbig > 0 && timecount && 3 && wpax != Infinity) {
		wpa.innerText = 'WPA:  ' + wpaxbig + ':' + wpax.toFixed(2);
	} else if (timecount == 3 && wpax == Infinity) {
		wpa.innerText = 'WPA:  DNF';
	}
	processTarget();
};

function processTarget() {
	if (timecount == 3 && worstplace == 0 && (time[1] != Infinity || time[2] != Infinity || time[3] != Infinity)) {
		timetemp = (targetavg * 3) - time[1] - time[2] - time[3] + bestx;
		while (targetx >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
		targetxstring = targetxbig + ':' + timetemp.toFixed(2);
	} else if (timecount == 3 && worstplace == 1 && (time[0] != Infinity || time[2] != Infinity || time[3] != Infinity)) {
		timetemp = (targetavg * 3) - time[0] - time[2] - time[3] + bestx;
		while (targetx >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
		targetxstring = targetxbig + ':' + timetemp.toFixed(2);
	} else if (timecount == 3 && worstplace == 2 && (time[0] != Infinity || time[1] != Infinity || time[3] != Infinity)) {
		timetemp = (targetavg * 3) - time[0] - time[1] - time[3] + bestx;
		while (targetx >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
		targetxstring = targetxbig + ':' + timetemp.toFixed(2);
	} else if (timecount == 3 && worstplace == 3 && (time[0] != Infinity || time[1] != Infinity || time[2] != Infinity)) {
		timetemp = (targetavg * 3) - time[0] - time[1] - time[2] + bestx;
		while (targetx >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
		targetxstring = targetxbig + ':' + timetemp.toFixed(2);
	}
	drawTarget();
};

function drawTarget() {
	if (targetxbig == 0 && targetx > bestx && targetx < worstx && timecount == 3) {
		target.innerText = 'Target:  ' + targetx.toFixed(2);
	} else if (targetxbig > 0 && targetx > bestx && targetx < worstx && timecount == 3) {
		target.innerText = 'Target:  ' + targetxstring;
	} else if (targetx < bestx && timecount == 3) {
		target.innerText = 'Target:  Not Possible';
	} else if (targetx > worstx && timecount == 3) {
		target.innerText = 'Target:  Guaranteed';
	}
	processAVG();
};

function processAVG() {
	if (timecount == 4 && worstplace == 0 && (time[1] != Infinity || time[2] != Infinity || time[3] != Infinity || time[4] != Infinity)) {
		avgx = (time[1] + time[2] + time[3] + time[4] - bestx) / 3;
	} else if (timecount == 4 && worstplace == 1 && (time[0] != Infinity || time[2] != Infinity || time[3] != Infinity || time[4] != Infinity)) {
		avgx = (time[0] + time[2] + time[3] + time[4] - bestx) / 3;
	} else if (timecount == 4 && worstplace == 2 && (time[0] != Infinity || time[1] != Infinity || time[3] != Infinity || time[4] != Infinity)) {
		avgx = (time[0] + time[1] + time[3] + time[4] - bestx) / 3;
	} else if (timecount == 4 && worstplace == 3 && (time[0] != Infinity || time[1] != Infinity || time[2] != Infinity || time[4] != Infinity)) {
		avgx = (time[0] + time[1] + time[2] + time[4] - bestx) / 3;
	} else if (timecount == 4 && worstplace == 4 && (time[0] != Infinity || time[1] != Infinity || time[2] != Infinity || time[3] != Infinity)) {
		avgx = (time[0] + time[1] + time[2] + time[3] - bestx) / 3;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
	} else {
		avgx = Infinity;
	}
	drawAVG();
};

function drawAVG() {
	if (timecount == 4 && avgxbig == 0 && avgx != Infinity) {
		avg.innerText = 'Average:  ' + avgx.toFixed(2);
	} else if (timecount == 4 && avgxbig > 0 && avgx != Infinity) {
		avg.innerText = 'Average:  ' + avgxbig + ':' + avgx.toFixed(2);
	} else if (timecount == 4 && avgx == Infinity) {
		avg.innerText = 'Average:  DNF';
	}
};

// Everything that ends with an M is related to mo3
function drawTimeM() {
	if (timecount == 0 && timebig[0] == 0 && checkPenalty() == 1) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
	} else if (timecount == 1 && timebig[1] == 0 && checkPenalty() == 1) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
	} else if (timecount == 2 && timebig[2] == 0 && checkPenalty() == 1) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
	} else if (timecount == 0 && timebig[0] > 0 && checkPenalty() == 1) {
		timetemp = time[0] - timebig[0] * 60 + ':' + timetemp.toFixed(2);
		time1.innerText = '1.  ' + timebig[0] + ':' + timetemp.toFixed(2);
	} else if (timecount == 1 && timebig[1] > 0 && checkPenalty() == 1) {
		timetemp = time[1] - timebig[1] * 60;
		time2.innerText = '2.  ' + timebig[1] + ':' + timetemp.toFixed(2);
	} else if (timecount == 2 && timebig[2] > 0 && checkPenalty() == 1) {
		timetemp = time[2] - timebig[2] * 60;
		time3.innerText = '3.  ' + timebig[2] + ':' + timetemp.toFixed(2);
	} else if (ckeckPenalty == 2) {
		drawTimePlus2M();
	} else if (checkPenalty() == 3) {
		drawTimeDNFM();
	}
	processBestM();
	processWorstM();
};

function drawTimePlus2M() {
	if (timecount == 0 && timebig[0] == 0 && checkPenalty() == 2) {
		time1.innerText = '1.  ' + time[0].toFixed(2) + '+';
	} else if (timecount == 1 && timebig[1] == 0 && checkPenalty() == 2) {
		time2.innerText = '2.  ' + time[1].toFixed(2) + '+';
	} else if (timecount == 2 && timebig[2] == 0 && checkPenalty() == 2) {
		time3.innerText = '3.  ' + time[2].toFixed(2) + '+';
	} else if (timecount == 0 && timebig[0] > 0 && checkPenalty() == 2) {
		timetemp = time[0] - timebig[0] * 60 + ':' + timetemp.toFixed(2) + '+';
		time1.innerText = '1.  ' + timebig[0] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 1 && timebig[1] > 0 && checkPenalty() == 2) {
		timetemp = time[1] - timebig[1] * 60;
		time2.innerText = '2.  ' + timebig[1] + ':' + timetemp.toFixed(2) + '+';
	} else if (timecount == 2 && timebig[2] > 0 && checkPenalty() == 2) {
		timetemp = time[2] - timebig[2] * 60;
		time3.innerText = '3.  ' + timebig[2] + ':' + timetemp.toFixed(2) + '+';
	}
};

function drawTimeDNFM() {
	if (timecount == 0 && checkPenalty() == 3) {
		time1.innerText = '1.  DNF';
	} else if (timecount == 1 && checkPenalty == 3) {
		time2.innerText = '2.  DNF';
	} else if (timecount == 2 && checkPEnalty() == 3) {
		time3.innerText = '3.  DNF';
	}
};

function processBestM() {
	bestx = Math.min(...time);
	bestplace = time.indexOf(bestx);
	if (bestx < 60 && timepenalty[bestplace] == 1) {
		best.innerText = 'Best:  ' + bestx.toFixed(2);
	} else if (bestx >= 60 && bestx < Infinity && timepenalty[bestplace] == 1) {
		timetemp = bestx - timebig[bestplace] * 60;
		best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp.toFixed(2);
	} else if (bestx < 60 && timepenalty[bestplace] == 2) {
		best.innerText = 'Best:  ' + best.toFixed(2) + '+';
		} else if (bestx >= 60 && bestx < Infinity && timepenalty[bestplace] == 2) {
			timetemp = bestx = timebig[bestplace] * 60;
			best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp.toFixed(2) + '+';
	} else if (bestx == Infinity) {
		best.innerText == 'Best:  DNF';
		worst.innerText == 'Worst:  DNF';
	}
	processTargetM();
};

function processWorstM() {
	worstx = Math.max(...time);
	worstplace = time.indexOf(worstx);
	if (worstx < 60 && timepenalty[worstplace] == 1) {
		worst.innerText = 'Worst:  ' + worstx.toFixed(2);
	} else if (worstx >= 60 && worstx < Infinity && timepenalty[worstplace] == 1) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp.toFixed(2);
	} else if (worstx < 60 && timepenalty[worstplace] == 2) {
		worst.innerText = 'Worst:  ' + worstx.toFixed(2) + '+';
	} else if (worstx >= 60 && worstx < Infinity && timepenalty[worstplace] == 2) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp.toFixed(2) + '+';
	} else if (worstx == Infinity) {
		worst.innerText = 'Worst:  DNF';
	}
};

function processTargetM() {
	if (timecount == 1) {
		timetemp = (targetavg * 3) - time[0] - time[1];
		targetxbig = 0;
		while (timetemp >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
	}
	drawTargetM();
	console.log(targetx, timetemp);
};

function drawTargetM() {
	if (targetxbig == 0 && targetx > 0 && timecount == 1) {
		target.innerText = 'Target:  ' + targetx.toFixed(2);
	} else if (targetxbig > 0 && targetx > 0 && timecount == 1) {
		target.innerText = 'Target:  ' + targetxbig + ':' + timetemp.toFixed(2);
	} else if (targetx <= 0 && timecount == 1) {
		target.innerText = 'Target:  Not Possible';
	}
	processMean();
};

function checkDNFM() {
	if ((time[0] + time[1] + time[2]) >= Infinity) {
		return 1;
	} else {
		return 0;
	}
};

function processMean() {
	if (timecount == 2 && checkDNFM() == 0) {
		avgx = (time[0] + time [1] + time[2]) / 3;
		avgxbig = 0;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
	} else if (checkDNFM() == 1) {
		avgx = Infinity;
	}
	drawMean();
};

function drawMean() {
	if (avgxbig == 0 && timecount == 2 && avgx != Infinity) {
		avg.innerText = 'Mean:  ' + avgx.toFixed(2);
	} else if (avgxbig > 0 && timecount == 2 && avgx != Infinity) {
		avg.innerText = 'Mean:  ' +  avgxbig + ':' + avgx.toFixed(2);
	} else if (timecount == 2 && avgx == Infinity) {
		avg.innerText = 'Mean:  DNF';
	}
};

function timeOK() {
	if (checkPenalty() == 2) {
		time[timecount] -= 2;
		timepenalty[timecount] = 1;
		pickFormat();
	} else if (checkPenalty() == 3) {
		time[timecount] = Number(timednf[timecount]);
		timepenalty[timecount] = 1;
		pickFormat();
	}
};

function timePlus2() {
	if (checkPenalty() == 1) {
		time[timecount] += 2;
		timepenalty[timecount] = 2;
		pickFormat();
	} else if (checkPenalty() == 3) {
		time[timecount] = timednf[timecount] + 2;
		timepenalty[timecount] = 2;
		pickFormat();
	}
};

function timeDNF() {
	if (checkPenalty() == 1) {
		timednf[timecount] = time[timecount];
		time[timecount] = Infinity;
		timepenalty[timecount] = 3;
		pickFormat();
	} else if (checkPenalty() == 2) {
		timednf[timecount] = time[timecount] - 2;
		time[timecount] = Infinity;
		timepenalty[timecount] = 3;
		pickFormat();
	}
};

// Not sure if it's more efficient this way, but I just felt like doing it this way
function checkPenalty() {
	if (timepenalty[timecount] == 1) {
		return 1;
	} else if (timepenalty[timecount] == 2) {
		return 2;
	} else if (timepenalty[timecount] == 3) {
		return 3;
	}
};

ok.onclick = function() {
	timeOK();
};

p2.onclick = function() {
	timePlus2();
};

dnf.onclick = function() {
	timeDNF();
};

deleteb.onclick = function() {
	deletesolve();
};

resetb.onclick = function() {
	reset();
};

function deletesolve() {
	if (timecount == 0) {
		time.pop();
		timebig.pop();
		timepenalty[timecount] = 1;
		timecount -= 1
		time1.innerText = '1.  ';
	} else if (timecount == 1) {
		time.pop();
		timebig.pop();
		timepenalty[timecount] = 1;
		timecount -= 1
		time2.innerText = '2.  ';
	} else if (timecount == 2) {
		time.pop();
		timebig.pop();
		timepenalty[timecount] = 1;
		timecount -= 1
		time3.innerText = '3.  ';
	} else if (timecount == 3) {
		time.pop();
		timebig.pop();
		timepenalty[timecount] = 1;
		timecount -= 1
		time4.innerText = '4.  ';
	} else if (timecount == 4) {
		time.pop();
		timebig.pop();
		timepenalty[timecount] = 1;
		timecount -= 1
		time5.innerText = '5.  ';
	}
	drawTime();
};

function reset() {
	while (time[0] > 0) {
		time.pop();
	}
	while (timebig[0] > 0) {
		timebig.pop()
	}
	time1.innerText = "1.  ";
	time2.innerText = "2.  ";
	time3.innerText = "3.  ";
	time4.innerText = "4.  ";
	time5.innerText = "5.  ";
	best.innerText = "Best:  ";
	worst.innerText = "Worst:  ";
	bpa.innerText = "BPA:  ";
	wpa.innerText = "WPA:  ";
	target.innerText = "Target:  ";
	avg.innerText = "Average:  ";
	timecount = -1;
};

settarget.onclick = function() {
	calcdiv.style.display = 'none';
	settingsmenu.style.display = 'inline' // ch
	menubutton.style.visibility = 'hidden';
	targetavgbutton.style.visibility = 'visible';
};

targetavgbutton.onclick = function() {
	targetavgbutton.style.visibility = 'hidden';
	menubutton.style.viibility = 'visible';
	calcdiv.style.display = 'flex';
	settingsmenu.style.display = 'none';
};

formatsh.onclick = function() {
   formatop.style.display = 'inline';
};

formatop1.onclick = function() {
   format = 1;
   formatsh.innerText = 'ao5';
   formatop.style.display = 'none';
   time4.style.visibility = 'visible';
   time5.style.visibility = 'visible';
   bpa.style.visibility = 'visible';
   wpa.style.visibility = 'visible';
   avg.innerText = 'Average:  ';
};

formatop2.onclick = function() {
   format = 2;
   formatsh.innerText = 'mo3';
   formatop.style.display = 'none';
   time4.style.visibility = 'hidden';
   time5.style.visibility = 'hidden';
   bpa.style.visibility = 'hidden';
   wpa.style.visibility = 'hidden';
   avg.innerText = 'Mean:  ';
};
});
