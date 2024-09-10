

// CO, 1 = cw 2 = ccw, cw means that it has been twisted cw from solved and vice versa (check movetwists to see what moves effect corners differently), EO, 0 = Oriented 1 = Unoriented, oriented means it can be put into it's position with the correct orientation with only R L U D moves
// Corners go: UBL, UBR, UFR, UFL, DFL, DFR, DBR, DFL
// Edges go: UB, UR, UF, UL, FL, FR, BR, BL, DL, DF, DR, DB

let temp = 0
let 333c = [0, 1, 2, 3, 4, 5, 6, 7];
let 333e = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11];
let 333co = [0, 0, 0, 0, 0, 0, 0, 0];
let 333eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function R() {
	temp = 333c[1];
	333c[1] = 333c[2];
	333c[2] = 333c[5];
	333c[5] = 333c[6];
	333c[6] = temp;
	temp = 333e[1];
	333e[1] = 333e[5];
	333e[5] = 333e[10];
	333e[10] = 333e[6];
	333e[6] = temp;
};

// I'm not ready for this garbage lmao	
