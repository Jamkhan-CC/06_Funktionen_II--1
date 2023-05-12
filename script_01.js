
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/



/** Konstanten (Global)*/
const ERROR_STR_DIV = "ERROR: Division by 0 not possible!";
const ERROR_STR_GEN = "ERROR: Something went wrong!";
const ERROR_STR_ABORT = "ERROR: Aborted by user!";
const INFO_STR_OP = "Please insert correct operator [ + | - | * | : | / ]:";
const INFO_STR_RES = "The result is: ";
const INFO_STR_PRE_NUM = "Please insert ";
const INFO_STR_POST_NUM = " number:";

/** Variable (Global)*/
let isNotAborted; 

// application / App
startApp();
function startApp() {
    let num1,num2,op;
    isNotAborted = true;

    if (isNotAborted){num1 = getNumber("1st");}
    if (isNotAborted){op = getOp();}
    if (isNotAborted){num2 = getNumber("2nd");}

    if (isNotAborted){
        output(calculator(num1,num2,op)); 
    } else{
        output(ERROR_STR_ABORT);
    }
}

// module: data input | test:
// output(getNumber("1st"));
function getNumber(figure) {
    let displayStr = INFO_STR_PRE_NUM + figure + INFO_STR_POST_NUM;
    let inputStr = prompt(displayStr) 
    let num = parseInt(inputStr);

    // if num is NOT a number AND user DIDN'T click at Abbrechen
    while (isNaN(num) && (inputStr !== null)) {
        inputStr =  prompt(displayStr);
        num = parseInt(inputStr); 
    }

    // if this is aborted, ALL gets aborted ...
    if(inputStr == null){isNotAborted = false;}
    return num;

}

// module: input operator | Test:
// output(getOp());
function getOp() {

    let op = prompt(INFO_STR_OP); 
    // if op is NOT valid AND user DIDN'T click at Abbrechen
    while (isOpNotValid(op) && (op !== null)) {
        op = prompt(INFO_STR_OP);
    }

    if (op == null){isNotAborted = false;}
    return op;
}

// module: check operator | Test:
// agreement : "+","-","*",":","/"
// output(isOpNotValid("+"));
// output(isOpNotValid("-"));
// output(isOpNotValid("*"));
// output(isOpNotValid(":"));
// output(isOpNotValid("/"));
// output(isOpNotValid("#?#"));
// output(isOpNotValid(""));
function isOpNotValid(op) {
    return op != "+" && op != "-" && op != "*" && op != ":" && op != "/";
}


// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
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

