let select_length = document.getElementById("length");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let lower_case = document.getElementById("lower-case");
let upper_case = document.getElementById("upper-case");
let generate_button = document.getElementById("generate-button");
let clear_button = document.getElementById("clear-button");
let label = document.getElementById("result");

generate_button.onclick = function(){
	if(!(symbols.checked || numbers.checked || lower_case.checked || upper_case.checked)){
		result.innerHTML="!Please select at least one checkbox."
	}
	else{
		const length = select_length.value;
		const hasLower = lower_case.checked;
		const hasUpper = upper_case.checked;
		const hasNumber = numbers.checked;
		const hasSymbol = symbols.checked;
		result.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	}
}

clear_button.onclick = function(){
	result.innerHTML="";
	symbols.checked=false;
	numbers.checked=false;
	lower_case.checked=false;
	upper_case.checked=false;
	select_length.selectedIndex=0;
}

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}