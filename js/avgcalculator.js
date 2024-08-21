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

let time = [];
let timebig = [];
let timepenalty = [1, 1, 1, 1, 1]; // 1 = ok, 2 = +2, 3 = dnf
let timednf = [0, 0, 0, 0, 0];
let timebigtemp = 0;
let bpax = 0;
let wpax = 0;
let avgx = 0;
let bestx = 0;
let worstx = 0;
let targetx = 0;
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
let targetxavgbig = 0;
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
let newworst = 0; // for +2 and dnf
let format = 1; // 1 = ao5, 2 = mo3
let bestex = 0;
let worstex = 0;

// Keybindings
function handleShortcut(event) {
	if (event.key === "Enter" && document.activeElement === timein) {
		event.preventDefault();
		processTime();
	} else if (event.key === "Enter" && document.activeElement === targetin) {
		event.preventDefault();
		processTargetAVG();
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

// Processes the time input
function processTime() {
	let timetemp = Number(timein.value);
	timein.value = '';
	if (timetemp < 6000 && timetemp > 0) {
		let timeconvert = (timetemp / 100).toFixed(2);
		timecount += 1;
		time.push(Number(timeconvert));
		timebig.push(zero);
		pickFormat();
	} else if (timetemp >= 10000) {
		let timeconvert = (timetemp / 100).toFixed(2);
		timecount += 1;
		timebigtemp = timeconvert;
		processTimeBig();
	}
};

// Processes times that are over a minute
function processTimeBig() {
	let timebigcount = 0;
	while (timebigtemp >= 60) {
		timebigcount += 1;
		timebigtemp -= 100;
	}
	timebig.push(timebigcount);
	time.push(Number(timebigtemp));
	pickFormat();
};

// Chooses the correct format
function pickFormat() {
	if (format === 1) {
		drawTime();
	} else if (format === 2) {
		drawTimeM();
	}
};

// Everything until the next double comment are funtions for ao5
// Displays time, and for big times it converts them to seconds
function drawTime() {
	if (timecount == 0 && timebig[0] == 0) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
		best.innerText = 'Best:  ' + time[0].toFixed(2);
		bestx = time[0];
	} else if (timecount == 0 && timebig[0] > 0) {
		time1.innerText = '1.  ' + timebig[0] + ':' + time[0].toFixed(2);
		best.innerText = 'Best:  ' + timebig[0] + ':' + time[0].toFixed(2);
		timebig1 = timebig[0] + ':' + time[0].toFixed(2);
		let timebigminutes = timebig[0] * 60;
		let timebigseconds = time[0];
		time[0] = timebigminutes + timebigseconds;
		bestx = timebigminutes + timebigseconds;
	} else if (timecount == 1 && timebig[1] == 0) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
		processBestWorstTwo();
	} else if (timecount == 1 && timebig[1] > 0) {
		time2.innerText = '2.  ' + timebig[1] + ':' + time[1].toFixed(2);
		timebig2 = timebig[1] + ':' + time[1].toFixed(2);
		let timebigminutes = timebig[1] * 60;
		let timebigseconds = time[1];
		time[1] = timebigminutes + timebigseconds;
		processBestWorstTwo();
	} else if (timecount == 2 && timebig[2] == 0) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
		processBestWorst();
	} else if (timecount == 2 && timebig[2] > 0) {
		time3.innerText = '3.  ' + timebig[2] + ':' + time[2].toFixed(2);
		timebig3 = timebig[2] + ':' + time[2].toFixed(2);
		let timebigminutes = timebig[2] * 60;
		let timebigseconds = time[2];
		time[2] = timebigminutes + timebigseconds;
		processBestWorst();
	} else if (timecount == 3 && timebig[3] == 0) {
		time4.innerText = '4.  ' + time[3].toFixed(2);
		processBestWorst();
	} else if (timecount == 3 && timebig[3] > 0) {
		time4.innerText = '4.  ' + timebig[3] + ':' + time[3].toFixed(2);
		timebig4 = timebig[3] + ':' + time[3].toFixed(2);
		let timebigminutes = timebig[3] * 60;
		let timebigseconds = time[3];
		time[3] = timebigminutes + timebigseconds;
		processBestWorst();
	} else if (timecount == 4 && timebig[4] == 0) {
		time5.innerText = '5.  ' + time[4].toFixed(2);
		processBestWorst();
	} else if (timecount == 4 && timebig[4] > 0) {
		time5.innerText = '5.  ' + timebig[4] + ':' + time[4].toFixed(2);
		timebig5 = timebig[4] + ':' + time[4].toFixed(2);
		let timebigminutes = timebig[4] * 60;
		let timebigseconds = time[4];
		time[4] = timebigminutes + timebigseconds;
		processBestWorst();
	}
};

// Processes the best and worst times but exclusively for the second solve
function processBestWorstTwo() {
	if (time[1] < bestx && timebig[1] == 0 && timebig[0] == 0) {
		worstx = bestx;
		bestx = time[1];
		bestplace = 1;
		best.innerText = 'Best:  ' + time[1].toFixed(2);
		worst.innerText = 'Worst:  ' + worstx.toFixed(2);
	} else if (time[1] < bestx && timebig[1] == 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		bestplace = 1;
		best.innerText = 'Best:  ' + time[1].toFixed(2);
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (time[1] < bestx && timebig[1] > 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		bestplace = 1;
		best.innerText = 'Best:  ' + timebig2;
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (time[1] > worstx && timebig[1] == 0) {
		worstx = time[1];
		worstplace = 1;
		worst.innerText = 'Worst:  ' + time[1].toFixed(2);
	} else if (time[1] > worstx && timebig[1] > 0) {
		worstx = time[1];
		worstplace = 1;
		worst.innerText = 'Worst:  ' + timebig2;
	}
};
// Processes the best and worst times
function processBestWorst() {
	if (time[timecount] < bestx && timebig[timecount] == 0) {
		bestx = time[timecount];
		bestplace = timecount;
		best.innerText = 'Best:  ' + time[timecount].toFixed(2);
		processBPA();
	} else if (time[timecount] > worstx && timebig[timecount] == 0) {
		worstx = time[timecount];
		worstplace = timecount;
		worst.innerText = 'Worst:  ' + time[timecount].toFixed(2);
		processBPA();
	} else if (time[timecount] < bestx && timebig[timecount] > 0) {
		processBestWorstBig();
	} else if (time[timecount] > worstx && timebig[timecount] > 0) {
		processBestWorstBig();
	} else {
		processBPA();
	}
};

// Processes the best and worst times for times bigger than a minute
function processBestWorstBig() {
	if (timecount == 2 && time[2] < bestx) {
		bestx = time[2];
		bestplace = 2;
		best.innerText = 'Best:  ' + timebig3;
		processBPA();
	} else if (timecount == 2 && time[2] > worstx) {
		worstx = time[2];
		worstplace = 2;
		worst.innerText = 'Worst:  ' + timebig3;
		processBPA();
	} else if (timecount == 3 && time[3] < bestx) {
		bestx = time[3];
		bestplace = 3;
		best.innerText = 'Best:  ' + timebig4;
		processBPA();
	} else if (timecount == 3 && time[3] > worstx) {
		worstx = time[3];
		worstplace = 3;
		worst.innerText = 'Worst:  ' + timebig4;
		processBPA();
	} else if (timecount == 4 && time[4] < bestx) {
		bestx = time[4];
		bestplace = 4;
		best.innerText = 'Best:  ' + timebig5;
		processBPA();
	} else if (timecount == 4 && time[4] > worstx) {
		worstx = time[4];
		worstplace = 4;
		worst.innerText = 'Worst:  ' + timebig5;
		processBPA();
	} else {
		processBPA();
	}
};

// Processes BPA
function processBPA() {
	if (timecount == 3) {
		let bpaxtemp = time[0] + time[1] + time[2] + time[3] - worstx;
		bpax = bpaxtemp / 3;
		while (bpax >= 60) {
			bpaxbig += 1;
			bpax -= 60;
		}
		let bpaminutes = bpaxbig * 60;
		let bpaseconds = bpax;
		bpaxtime = bpaminutes + bpaseconds;
		drawBPA();
	} else {
		processAVG();
	}
};

// Displays BPA
function drawBPA() {
	if (bpaxbig == 0) {
		bpa.innerText = 'BPA:  ' + bpax.toFixed(2);
		processWPA();
	} else if (bpaxbig >= 0) {
		bpa.innerText = 'BPA:  ' + bpaxbig + ':' + bpax.toFixed(2);
		processWPA();
	}
};

// Processes WPA
function processWPA() {
	if (timecount == 3) {
		let wpaxtemp = time[0] + time[1] + time[2] + time[3] - bestx;
		wpax = wpaxtemp / 3;
		while (wpax > 60) {
			wpaxbig += 1;
			wpax -= 60;
		}
		let wpaminutes = wpaxbig * 60;
		let wpaseconds = wpax;
		wpaxtime = wpaminutes + wpaseconds;
		drawWPA();
	}
};

// Displays WPA
function drawWPA() {
	if (wpaxbig == 0) {
		wpa.innerText = 'WPA:  ' + wpax.toFixed(2);
		processTarget();
	} else if (wpaxbig > 0) {
		wpa.innerText = 'WPA:  ' + wpaxbig + ':' + wpax.toFixed(2);
		processTarget();
	}
};

// Takes you to the Setting that lets you set your target avg
settarget.onclick = function() {
	calcdiv.style.display = 'none';
	settingsmenu.style.display = 'inline'; // Will prolly change
	menubutton.style.visibility = 'hidden';
	targetavgbutton.style.visibility = 'visible';
};

// Takes you back to the calc
targetavgbutton.onclick = function() {
	targetavgbutton.style.visibility = 'hidden';
	menubutton.style.visibility = 'visible';
	calcdiv.style.display = 'flex';
	settingsmenu.style.display = 'none';
};

// Processes the target average input
function processTargetAVG() {
	let targettemp = Number(targetin.value);
	targetin.value = '';
	target.style.visibility = 'visible';
	if (targettemp > 0) {
		let targetconvert = targettemp / 100;
		while (targetconvert >= 100) {
			targetxavgbig += 1;
			targetconvert -= 100;
		}
		let targetminutes = targetxavgbig * 60;
		let targetseconds = targetconvert;
		targetchuj = targetconvert;
		targetavg = targetminutes + targetseconds;
		targetavgstring = targetxavgbig + ':' + targetconvert.toFixed(2);
		drawTargetAVG();
	}
};

// Displays the target average
function drawTargetAVG() {
	if (targetxavgbig == 0) {
		currenttarget.innerText = 'Target average:  ' + targetchuj;
	} else if (targetxavgbig > 0) {
		currenttarget.innerText = 'Target average:  ' + targetavgstring;
	}
};

// Processes the target time
function processTarget() {
	if (timecount == 3) {
		targetx = (targetavg * 3) - time[0] - time[1] - time[2] - time[3] + bestx + worstx;
		while (targetx >= 60) {
			targetxbig += 1;
			targetx -= 60;
		}
		let targetxminutes = targetxbig * 60;
		let targetxseconds = targetx;
		targetxtime = targetxminutes + targetxseconds;
		drawTarget();
	}
};

// Displays the target time
function drawTarget() {
	if (targetxbig == 0 && targetxtime > bestx && targetxtime < worstx) {
		target.innerText = 'Target:  ' + targetx.toFixed(2);
	} else if (targetxbig > 0 && targetxtime > bestx && targetxtime < worstx) {
		target.innerText = 'Target:  ' + targetxbig + ':' + targetx.toFixed(2);
	} else if (targetavg < bpaxtime) {
		target.innerText = 'Target:  Not Possible';
	} else if (targetavg > wpaxtime) {
		target.innerText = 'Target:  Guaranteed';
	}
};

// Processes the ao5
function processAVG() {
	if (timecount == 4) {
		let avgxtemp = time[0] + time[1] + time[2] + time[3] + time[4] - bestx - worstx;
		avgx = avgxtemp / 3;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
		drawAVG();
	}
};

// Displays the ao5
function drawAVG() {
	if (avgxbig == 0) {
		avg.innerText = 'Average:  ' + avgx.toFixed(2);
	} else if (avgxbig > 0) {
		avg.innerText = 'Average:  ' + avgxbig + ':' + avgx.toFixed(2);
	}
};

// Here everything is related to mo3
// Displays time
function drawTimeM() {
	if (timecount == 0 && timebig[0] == 0) {
		time1.innerText = '1.  ' + time[0].toFixed(2);
		best.innerText = 'Best:  ' + time[0].toFixed(2);
		bestx = time[0];
	} else if (timecount == 0 && timebig[0] > 0) {
		time1.innerText = '1.  ' + timebig[0] + ':' + time[0].toFixed(2);
		best.innerText = 'Best:  ' + timebig[0] + ':' + time[0].toFixed(2);
		timebig1 = timebig[0] + ':' + time[0].toFixed(2);
		let timebigminutes = timebig[0] * 60;
		let timebigseconds = time[0];
		time[0] = timebigminutes + timebigseconds;
		bestx = timebigminutes + timebigseconds;
	} else if (timecount == 1 && timebig[1] == 0) {
		time2.innerText = '2.  ' + time[1].toFixed(2);
		processBestWorstM();
	} else if (timecount == 1 && timebig[1] > 0) {
		time2.innerText = '2.  ' + timebig[1] + ':' + time[1].toFixed(2);
		timebig2 = timebig[1] + ':' + time[1].toFixed(2);
		let timebigminutes = timebig[1] * 60;
		let timebigseconds = time[1];
		time[1] = timebigminutes + timebigseconds;
		processBestWorstM();
	} else if (timecount == 2 && timebig[2] == 0) {
		time3.innerText = '3.  ' + time[2].toFixed(2);
		processBestWorstM();
	} else if (timecount == 2 && timebig[2] > 0) {
		time3.innerText = '3.  ' + timebig[2] + ':' + time[2].toFixed(2);
		timebig3 = timebig[2] + ':' + time[2].toFixed(2);
		let timebigminutes = timebig[2] * 60;
		let timebigseconds = time[2];
		time[2] = timebigminutes + timebigseconds;
		processBestWorstM();
	}
};

// Processes best and worst times
function processBestWorstM() {
	if (timecount == 1 && time[1] < bestx && timebig[1] == 0 && timebig[0] == 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + time[1].toFixed(2);
		worst.innerText = 'Worst:  ' + worstx.toFixed(2);
	} else if (timecount == 1 && time[1] < bestx && timebig[1] == 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + time[1].toFixed(2);
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (timecount == 1 && time[1] < bestx && timebig[1] > 0 && timebig[0] > 0) {
		worstx = bestx;
		bestx = time[1];
		best.innerText = 'Best:  ' + timebig2;
		worst.innerText = 'Worst:  ' + timebig1;
	} else if (timecount == 1 && time[1] > worstx && timebig[1] == 0) {
		worstx = time[1];
		worst.innerText = 'Worst:  ' + time[1].toFixed(2);
	} else if (timecount == 1 && time[1] > worstx && timebig[1] > 0) {
		worstx = time[1];
		worst.innerText = 'Worst:  ' + timebig2;
	} else if (timecount == 2 && time[2] < bestx && timebig[2] == 0) {
		bestx = time[2];
		best.innerText = 'Best:  ' + time[2];
	} else if (timecount == 2 && time[2] < bestx && timebig[2] > 0) {
		bestx = time[2];
		best.innerText = 'Best:  ' + timebig3;
	} else if (timecount == 2 && time[2] > worstx && timebig[2] == 0) {
		worstx = time[2];
		worst.innerText = 'Worst:  ' + time[2];
	} else if (timecount == 2 && time[2] > worstx && timebig[2] > 0) {
		worstx = time[2];
		worst.innerText = 'Worst:  ' + timebig3;
	}
	processTargetM();
};

// Processes the target time
function processTargetM() {
	if (timecount == 1) {
		targetx = (targetavg * 3) - time[0] - time[1];
		while (targetx >= 60) {
			targetxbig += 1;
			targetx -= 60;
		}
		let targetxminutes = targetxbig * 60;
		let targetxseconds = targetx;
		targetxtime = targetxminutes + targetxseconds;
	}
	drawTargetM();
};

// Displays the target time
function drawTargetM() {
	if (targetxbig == 0 && targetxtime > 0) {
		target.innerText = 'Target:  ' + targetx.toFixed(2);
	} else if (targetxbig > 0 && targetxtime > 0) {
		target.innerText = 'Target:  ' + targetxbig + ':' + targetx.toFixed(2);
	} else if (targetxtime > 0) {
		target.innerText = 'Target:  Not Possible';
	}
	processMean();
};

// Processes the mean
function processMean() {
	if (timecount == 2) {
		let avgxtemp = time[0] + time[1] + time[2];
		avgx = avgxtemp / 3;
		while (avgx >= 60) {
			avgxbig += 1;
			avgx -= 60;
		}
		drawMean();
	}
};

// Displays the mean
function drawMean() {
	if (avgxbig == 0) {
		avg.innerText = 'Mean:  ' + avgx.toFixed(2);
	} else if (avgxbig > 0) {
		avg.innerText = 'Mean:  ' + avgxbig + ':' + avgx.toFixed(2);
	}
};

// The setting that lets you change the format
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

// Chooses the correct format
function pickFormat1() {
	if (format === 1) {
		checkOK();
	} else if (format === 2) {
		checkOKM();
	}
};

function pickFormat2() {
	if (format === 1) {
		checlPlus2();
	} else if (format === 2) {
		checkPlus2M();
	}
};

function pickFormat3() {
	if (format === 1) {
		checkDNF();
	} else if (format === 2) {
		checkDNFM();
	}
};

// Checks which penalty the previous time had
function checkOK() {
	if (timepenalty[timecount] == 2) {
		timeOKPlus2();
	} else if (timepenalty[timecount] == 3) {
		timeOKDNF();
	}
};

function checkPlus2() {
	if (timepenalty[timecount] == 1) {
		timePlus2OK();
	} else if (timepenalty[timecount] == 3) {
		timePlus2DNF();
	}
};

function checkDNF() {
	if (timepenalty[timecount] == 1) {
		timeDNFOK();
	} else if (timepenalty[timecount] == 2) {
		timeDNFPlus2();
	}
};

// Applies +2 or dnf to solve
function timeOKPlus2() {

};

function timeOKDNF() {

};

function timePlus2OK() {
	if (timecount == 0)
};

function timePlus2DNF() {

};

function timeDNFOK() {

};

function timeDNFPlus2() {

};

// All the same as above but for mo3
function checkOKM() {
	if (timepenalty[timecount] == 2) {
		timeOKPlus2M();
	} else if (timepenalty[timecount] == 3) {
		timeOKDNFM();
	}
};

function checkPlus2M() {
	if (timepenalty[timecount] == 1) {
		timePlus2OKM();
	} else if (timepenalty[timecount] == 3) {
		timePlus2DNFM();
	{
};

function checkDNFM() {
	if (timepenalty[timecount] == 1) {
		timeDNFOKM();
	} else if (timepenalty[timecount] == 2) {
		timeDNFPlus2M();
	}
};

function timeOKPlus2M() {

};

function timeOKDNFM() {

};

function timePlus2OKM() {

};

function timePlus2DNFM() {

};

function timeDNFOKM() {

};

function timeDNFPlus2M() {

};
});
