
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/



// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich! Are You Mad?";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// module: calculator | tests:
// agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));
function calculator(a,b,op) {

	switch (op) {
		case "+":
			return add(a,b);
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case "/":
		case ":":
			return divide(a,b);

		default:
			return ERROR_STR_GEN;
	}
}



// module: addition c = a + b |  test:

// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	let c = a + b;
	return c;
	}
	// ODER (andere Option):
		// function add(a,b) {
		// 	return a + b;
		// }


// module: subtraction a - b |  test:...
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b | Test:...
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return a*b;
}

// module: division a / b |  test:

// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));
// output(divide(0,2));
function divide(a,b)  {
	if (b != 0) {
		return a/b;
	} else {	
		return ERROR_STR_DIV ;
	}
	// ODER (andere Option)
	if (b == 0) {
		return ERROR_STR_DIV;
	}
	return a/b;
 }


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}

