const previousDisplay = document.getElementById("previous");
const currentDisplay = document.getElementById("current");
const operatorList = "+-/*";
let operator;
function buttonClicked(value) {
	if (operatorList.includes(value)) {
		operator = value;
	}
}
function allClear() {
	previousDisplay.value = "";
	currentDisplay.value = "";
}
function deleteEntry() {}
function calculate() {}
