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

let temp = 0;
let tempstring = '';
let timetemp = '';
let time = [];
let timebig = [];
let timepenalty = [1, 1, 1, 1, 1];
let timednf = [0, 0, 0, 0, 0];
let timebigtemp = 0;
let bpax = 0;
let wpax = 0;
let avgx = 0;
let bestx = 0;
let worstx = 0;
let targetx = 0;
let targetxstring = '';
let targetxavg = 0;
let targetavg = 0;
let settargetset = 0;
let timecount = -1;
let zero = 0;
let timebig1 = '';
let timebig2 = '';
let timebig3 = '';
let timebig4 = '';
let timebig5 = '';
let bpaxbig = 0;
let wpaxbig = 0;
let targetxbig = 0;
let targetavgbig = 0;
let targetavgstring = '';
let targetchuj = 0;
let targetxtime = 0;
let avgxbig = 0;
let bestplace = 0;
let worstplace = 0;
let bpaxtime = 0;
let wpaxtime = 0;
let isnewbest = 0;
let isnewworst = 0;
let newbest = 0;
let newworst = 0;
let format = 1;
let bestex = 0;
let worstex = 0;

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
		pickFormat1();
	} else if (event.ctrlKey && event.key === "2" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		pickFormat2();
	} else if (event.ctrlKey && event.key === "3" && calcdiv.style.display === 'flex') {
		event.preventDefault();
		pickFormat3();
	}
};

// This is split into two functions to allow times to be entered in mm:ss.mm and mmssmm
function getTime() {
	tempstring = timein;
	if (String(tempstring).includes(":")) {
		timetemp = timein.value;
		timein.value = '';
		processTime();
	} else {
		timetemp = Number(timein.value).toFixed(2);
		timein.value = '';
		processTime();
	}
};

function processTime() {
	if (timetemp < 6000 && timetemp >= 10000 && Number.isInteger(timetemp)) {
		let temp = timetemp;
		timetemp = (temp / 100).toFixed(2);
		timecount += 1;
		let timebigcount = 0;
		while (timetemp > 100) {
			timebigcount += 1;
			timetemp -= 100;
		}
		let minutes = timebigcount * 60;
		let seconds = timetemp;
		timetemp = minutes + seconds;
		time.push(Number(timetemp).toFixed(2));
		timebig.push(timebigcount);
	} else if (timetemp < 60 && !Number.isInteger(timetemp)) {
		time.push(Number(timetemp).toFixed(2));
		timecount += 1;
		timebig.push(zero);
	} else if (timetemp.includes(":")) {
		timecount += 1;
		let timesplit = timetemp.split(":");
		let minutes = timesplit[0];
		let seconds = timesplit[1];
		timebig.push(minutes);
		timetemp = minutes * 60 + seconds;
		time.push(timetemp);
	}
	pickFormat();
};

// Chooses between ao5 and mo3 since they behave differently
function pickFormat() {
	if (format === 1) {
		drawTime();
	} else if (format === 2) {
		drawTimeM();
	}
};

function drawTime() {
	if (timecount == 0 && timebig[0] == 0) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
	} else if (timecount == 1 && timebig[1] == 0) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
	} else if (timecount == 2 && timebig[2] == 0) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
	} else if (timecount == 3 && timebig[3] == 0) {
		time4.innerText = '4.  ' + time[3].toFixed(2);
	} else if (timecount == 4 && timebig[4] == 0) {
		time5.innerText = '5.  ' + time[4].toFIxed(2);
	} else if (timecount == 0 && timebig[0] > 0) {
		timetemp = time[0] - timebig[0] * 60;
		time1.innerText = '1.  ' + timetemp + ':' + timetemp.toFixed(2);
	} else if (timecount == 1 && timebig[1] > 0) {
		timetemp = time[1] - timebig[1] * 60;
		time2.innerText = '2.  ' + timetemp + ':' + timetemp.toFixed(2);
	} else if (timecount == 2 && timebig[2] > 0) {
		timetemp = time[2] - timebig[2] * 60;
		time3.innerText = '3.  ' + timetemp + ':' + timetemp.toFixed(2);
	} else if (timecount == 3 && timebig[3] > 0) {
		timetemp = time[3] - timebig[3] * 60;
		time4.innerText = '4.  ' + timetemp + ':' + timetemp.toFixed(2);
	} else if (timecount == 4 && timebig[4] > 0) {
		timetemp = time[4] - timebig[4] * 60;
		time5.innerText = '5.  ' + timetemp + ':' + timetemp.toFixed(2);
	}
	processBestWorst();
};

function getTargetAVG() {
	if (targetin.includes(":")) {
		timetemp = targetin.value;
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
	if (timetemp < 6000 && timetemp >= 10000 && Number.isInteger(timetemp)) {
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
	} else if (timetemp < 60 && !Number.isInteger(timetemp)) {
		targetavg = timetemp.toFixed(2);
	} else if (timetemp.includes(":")) {
		let timesplit = timetemp.split(":");
		let minutes = timesplit[0];
		let seconds = timesplit[1];
		targetavgstring = minutes + ':' + seconds.toFixed(2);
		targetavg = minutes * 60 + seconds;
	}
	drawTargetAVG();
};

function drawTargetAVG() {
	if (targetavgstring.value == '') {
		currenttarget.innerText = 'Target average:  ' + targetavg;
	} else if (!targetavgstring.value == '') {
		currenttarget.innerText = 'Target average:  ' + targetavgstring;
	}
};

function processBestWorst() {
	bestx = Math.min(time);
	bestplace = time.indexOf(bestx);
	worstx = Math.max(time);
	worstplace = time.indexOf(worstx);
	if (bestx < 60) {
		best.innerText = 'Best:  ' + bestx;
	} else if (bestx >= 60 && bestx < Infinity) {
		timetemp = bestx - timebig[bestplace] * 60;
		best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp;
	} else if (worstx < 60) {
		worst.innerText = 'Worst:  ' + worstx;
	} else if (worstx >= 60 && worstx < Infinity) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp;
	} else if (worstx == Infinity) {
		worst.innerText = 'Worst:  DNF';
	} else if (bestx == Infinity) {
		best.innerText == 'Best:  DNF';
		worst.innerText == 'Worst:  DNF';
	}
	processBPA();
};

function processBPA() {
	if (timecount == 3) {
		bpax = (time[0] + time[1] + time[2] + time[3] - worstx) / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		}
	}
	drawBPA();
};

function drawBPA() {
	if (bpaxbig == 0) {
		bpa.innerText = 'BPA:  ' + bpax.toFixed(2);
	} else if (bpaxbig > 0) {
		bpa.innerText = 'BPA:  ' + bpaxbig + ':' + bpax.toFixed(2);
	}
	processWPA();
};

function processWPA() {
	if (timecount == 3) {
		wpax = (time[0] + time[1] + time[2] + time[3] - bestx) / 3;
		while (wpax >= 60) {
			wpaxbig += 1;
			wpax -= 60;
		}
	}
	drawWPA();
};

function drawWPA() {
	if (wpaxbig == 0) {
		wpa.innerText = 'WPA:  ' + wpax.toFixed(2)
	} else if (wpaxbig > 0) {
		wpa.innerText = 'WPA:  ' + wpaxbig + ':' + wpax;
	}
	processTarget();
};

function processTarget() {
	if (timecount == 3) {
		timetemp = (targetavg * 3) - time[0] - time[1] - time[2] - time[3] + bestx + worstx;
		while (targetx >= 60) {
			targetxbig += 1;
			timetemp -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
		targetxstring = targetxbig + ':' + timetemp;
	}
	drawTarget();
};

function drawTarget() {
	if (targetxstring.value == '' && targetx > bestx && targetx < worstx) {
		target.innerText = 'Target:  ' + targetx.tofixed(2);
	} else if (!targetxstring.value == '' && targetx > bestx && targetx < worstx) {
		target.innerText = 'Target:  ' + targetxstring;
	} else if (targetx < bestx) {
		target.innerText = 'Target:  Not Possible';
	} else if (targetx > worstx) {
		target.innerText = 'Target:  Guaranteed';
	}
	processAVG();
};

function processAVG() {
	if (timecount == 4) {
		avgx = (time[0] + time[1] + time[2] + time[3] + time[4] - bestx - worstx) / 3;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
		drawavg
	}
};

function drawAVG() {
	if (avgxbig == 0) {
		avg.innerText = 'Average:  ' + avgx.toFixed(2);
	} else if (avgxbig > 0) {
		avg.innerText = 'Average:  ' + avgxbig + ':' + avgx.toFixed(2);
	}
};

// Everything with an M at the end is related to mo3
function drawTimeM() {
	if (timecount == 0 && timebig[0] == 0) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
	} else if (timecount == 1 && timebig [1] == 0) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
	} else if (timecount == 2 && timebig[2] == 0) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
	} else if (timecount == 0 && timebig[0] > 0) {
		timetemp = time[0] - timebig[0] * 60;
		time1.innerText = '1.  ' + timebig[0] + ':' + timetemp.toFixed(2)
	} else if (timecount == 1 && timebig[1] > 0) {
		timetemp = time[1] - timebig[1] * 60;
		time2.innerText = '2.  ' + timebig[1] + ':' + timetemp.toFixed(2);
	} else if (timecount == 2 && timebig[2] > 0) {
		tiemtemp = time[2] = timebig[2] * 60;
		time3.innerText = '3.  ' + timebig[3] + ':' + timetemp.toFixed(2);
	}
	processBestWorstM();
};

function processBestWorstM() {
	bestx = Math.min(time);
	bestplace = time.indexOf(bestx);
	worstx = Math.max(time);
	worstplace = time.indexOf(worstx);
	if (bestx < 60) {
		best.innerText = 'Best:  ' + bestx;
	} else if (bestx >= 60 && bestx < Infinity) {
		timetemp = bestx - timebig[bestplace] * 60;
		best.innerText = 'Best:  ' + timebig[bestplace] + ':' + timetemp;
	} else if (worstx < 60) {
		worst.innerText = 'Worst:  ' + worstx;
	} else if (worstx >= 60 && worstx < Infinity) {
		timetemp = worstx - timebig[worstplace] * 60;
		worst.innerText = 'Worst:  ' + timebig[worstplace] + ':' + timetemp;
	} else if (worstx == Infinity) {
		worst.innerText = 'Worst:  DNF';
	} else if (bestx == Infinity) {
		best.innerText == 'Best:  DNF';
		worst.innerText == 'Worst:  DNF';
	}
	processTargetM();
};

function processTargetM() {
	if (timecount == 1) {
		timetemp = (targetavg * 3) - time[0] - time[1];
		while (timetemp >= 60) {
			targetxbig += 1;
			targetx -= 60;
		}
		let minutes = targetxbig * 60;
		let seconds = timetemp;
		targetx = minutes + seconds;
	}
	drawTargetM();
};

function drawTargetM() {
	if (targetxbig == 0 && targetx > 0) {
		target.innerText = 'Target:  ' + timetemp.toFixed(2);
	} else if (targetxbig > 0 && targetx > 0) {
		target.innerText = 'Target:  ' + targetxbig + ':' + timetemp;
	} else if (targetx < 0) {
		target.innerText = 'Target:  Not Possible';
	}
	processMean();
};

function processMean() {
	if (timecount == 2) {
		avgx = (time[0] + time [1] + time[2]) / 3;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
		drawMean();
	}
};

function drawMean() {
	if (avgxbig == 0) {
		avg.innerText = 'Mean:  ' + avgx.toFixed(2);
	} else if (avgxbig > 0) {
		avg.innerText = 'Mean:  ' +  avgxbig + ':' + avgx.toFixed(2);
	}
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
