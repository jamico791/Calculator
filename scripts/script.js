let textbox = document.getElementById('textbox');
let operation = 'NONE';
let prev;
let next;
let needToDelete = false;

function one() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 1;
	} else textbox.value += 1;
}

function two() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 2;
	} else textbox.value += 2;
}

function three() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 3;
	} else textbox.value += 3;
}

function four() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 4;
	} else textbox.value += 4;
}

function five() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 5;
	} else textbox.value += 5;
}

function six() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 6;
	} else textbox.value += 6;
}

function seven() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 7;
	} else textbox.value += 7;
}

function eight() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 8;
	} else textbox.value += 8;
}

function nine() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 9;
	} else textbox.value += 9;
}

function zero() {
	if (textbox.value == '0' || needToDelete) {
		needToDelete = false;
		textbox.value = 0;
	} else textbox.value += 0;
}

function decimal() {
	if (textbox.value == '0') textbox.value = '0.';
	else if (/\./g.test(textbox.value)) textbox.value = textbox.value;
	else textbox.value += '.';
}

function add() {
	prev = Number(textbox.value);
	operation = 'ADD';
	needToDelete = true;
}

function subtract() {
	prev = Number(textbox.value);
	operation = 'SUBTRACT';
	needToDelete = true;
}

function multiply() {
	prev = Number(textbox.value);
	operation = 'MULTIPLY';
	needToDelete = true;
}

function divide() {
	prev = Number(textbox.value);
	operation = 'DIVIDE';
	needToDelete = true;
}

function equals() {
	next = Number(textbox.value);
	switch (operation) {
		case 'ADD':
			textbox.value = prev + next;
			break;

		case 'SUBTRACT':
			textbox.value = prev - next;
			break;

		case 'MULTIPLY':
			textbox.value = prev * next;
			break;

		case 'DIVIDE':
			textbox.value = prev / next;
			break;

		default:
			break;
	}
}

function clearAll() {
	textbox.value = '0';
}

function backspace() {
	arr = [...textbox.value];
	arr.splice(arr.length - 1, 1);
	textbox.value = arr.join('');
	if (textbox.value == '') textbox.value = 0;
}
