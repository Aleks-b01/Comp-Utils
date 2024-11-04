document.addEventListener('DOMContentLoaded', function() {
document.addEventListener("keydown", handleShortcut);

int currentEvent = 3; // NxN = N | 3OH, 3BLD, 3FM, 3MBLD = 33, 333, 3333, 33333 | Pyra, Skewb, Sq1, Mega, Clock = 10, 11, 12, 13, 14 | 4BLD, 5BLD = 444, 555
int currentScramble;

function handleShortcut(event) {
	if ((event.key === "" || event.key === "Enter")) {
		event.preventDefault();
	}
};

function scramble() {
	if (currentEvent == 2) {

	} else if (currentEvent == 3) {

	} else if (currentEvent == 4) {

	} else if (currentEvent == 5) {

	} else if (currentEvent == 6) {

	} else if (currentEvent == 7) {

	} else if (currentEvent == 10) {

	} else if (currentEvent == 11) {

	} else if (currentEvent == 12) {
		
	} else if (currentEvent == 13) {

	} else if (currentEvent == 14) {

	} else if (currentEvent == 33) {

	} else if (currentEvent == 333) {

	} else if (currentEvent == 3333) {

	} else if (currentEvent == 444) {

	} else if (currentEvent == 555) {

	} else if (currentEvent == 33333) {

	}
};

});
