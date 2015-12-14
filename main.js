//undo the last calculation
// memory add
//clear funciton
// display all calculations
//style the cal
//allowing calculations to add on to each other
//history

function getInputs(){
	var inputOne = parseFloat(document.getElementById('input_1').value);
	var inputTwo = parseFloat(document.getElementById('input_2').value);
	return[inputOne, inputTwo]
}

function setOutput(sum) {
	var lastOutput = lastAnswer();
document.getElementById('output').innerHTML = sum;
document.getElementById('last_answer').innerHTML = lastOutput;
}

function add () {
	var inputs = getInputs();
	var sum =inputs[0] + inputs[1];
	setOutput(sum);
}


function subtract () {
	var inputs = getInputs();
	var sum =inputs[0] - inputs[1];
	setOutput(sum);
}
	
function divide () {
	var inputs = getInputs();
	var sum =inputs[0] / inputs[1];
	setOutput(sum);
}

function multiply () {
	var inputs = getInputs();
	var sum =inputs[0] * inputs[1];
	setOutput(sum);
}

function lastAnswer(){
	var elemet = document.getElementById('output');
	if (elemet.innerHTML == '') {
		return '';
	}
	return parseFloat(document.getElementById('output').innerHTML);
}
