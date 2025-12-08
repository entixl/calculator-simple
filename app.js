const display = document.getElementById("display");
function buttonClicked(input) {
	console.log(input);
	if (input == "AC") {
		display.value = "";
	} else if (input == "DE") {
		display.value = display.value.slice(0, -1);
	} else {
		if (display.value == "Error" || display.value == "Click buttons") {
			display.value = input;
		} else {
			display.value += input;
		}
	}
}
function calculate() {
	console.log("guyg");
	try {
		console.log("gumguufyg");
		display.value = eval(display.value);
	} catch (e) {
		console.log(e);
		display.value = "Error";
	}
}
