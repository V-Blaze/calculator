window.onload = function() {
	const calc = document.querySelector('#calc-screen');

	// Operators
	const operators = document.querySelectorAll('.operator');
	// const add = document.querySelector('#dd');
	// const subtract = document.querySelector('#subtract');
	// const multiply = document.querySelector('#multiply');
	// const divide = document.querySelector('#divide');

	// Numbers

	const numbers = document.querySelectorAll('.number');
	// const one = document.querySelector('#one');
	// const two = document.querySelector('#two');
	// const three = document.querySelector('#three');
	// const four = document.querySelector('#four');
	// const five = document.querySelector('#five');
	// const six = document.querySelector('#six');
	// const seven = document.querySelector('#seven');
	// const eight = document.querySelector('#eight');
	// const nine = document.querySelector('#nine');
	// const decimal = document.querySelector('#decimal');
	// const zero = document.querySelector('#zero');

	const del = document.querySelector('#delete');
	const clear = document.querySelector('#clear');
	const equal = document.querySelector('#equal');
	const clearHistory = document.querySelector('#clearHistory');

	//Modal
	const modal = document.querySelector('.modal');
	const trigger = document.querySelector('.trigger');
	const closeButton = document.querySelector('.close-button');

	let num1 = '';
	let num2 = '';
	let num3 = '';
	let operator = '';
	let result = '';

	for (let number of numbers) {
		number.addEventListener('click', (e) => {
			if (operator == '') {
				num1 += e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			} else if (operator != '') {
				num2 += e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			}
		});
	}

	for (let sign of operators) {
		sign.addEventListener('click', (e) => {
			if (operator.length == 0 && num1 != '') {
				operator = e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			} else if (operator.length != 0 && num2 == '') {
				operator = e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			} else if (result) {
				num1 = result;
				result = '';
				operator = e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			} else if (num1 != '' && num2 != '' && operator != '') {
				calculate();
				num1 = result;
				result = '';
				operator = e.target.value;
				calc.value = `${num1}${operator}${num2}`;
			}
			// console.log(e.target.value);
		});
	}

	// one.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += one.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += one.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });

	// two.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += two.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += two.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });

	// three.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += three.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += three.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}

	// 	console.log(e.target.value);
	// });

	// four.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += four.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += four.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// five.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += five.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += five.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// six.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += six.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += six.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// seven.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += seven.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += seven.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// eight.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += eight.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += eight.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// nine.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += nine.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += nine.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// zero.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += zero.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += zero.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });

	// decimal.addEventListener('click', (e) => {
	// 	if (operator == '') {
	// 		num1 += decimal.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator != '') {
	// 		num2 += odecimalne.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });

	// add.addEventListener('click', (e) => {
	// 	if (operator.length == 0 && num2 == '') {
	// 		operator = add.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator.length != 0 && num2 == '') {
	// 		operator = add.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// subtract.addEventListener('click', (e) => {
	// 	if (operator.length == 0 && num2 == '') {
	// 		operator = subtract.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator.length != 0 && num2 == '') {
	// 		operator = subtract.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// divide.addEventListener('click', (e) => {
	// 	if (operator.length == 0 && num2 == '') {
	// 		operator = divide.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator.length != 0 && num2 == '') {
	// 		operator = divide.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });
	// multiply.addEventListener('click', (e) => {
	// 	if (operator.length == 0 && num2 == '') {
	// 		operator = multiply.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	} else if (operator.length != 0 && num2 == '') {
	// 		operator = multiply.value;
	// 		calc.value = `${num1}${operator}${num2}`;
	// 	}
	// });

	equal.addEventListener('click', (e) => {
		calculate();
	});

	del.addEventListener('click', (e) => {
		// let curVal = calc.value;
		if (operator == '') {
			num1 = num1.substring(0, num1.length - 1);
			calc.value = num1;

			if (num1.length == 0) {
				calc.value = 0;
				num1 = '';
			}
		}

		if (operator != '' && num2 != '') {
			num2 = num2.substring(0, num2.length - 1);
			calc.value = `${num1}${operator}${num2}`;
		}
	});

	clear.addEventListener('click', (e) => {
		calc.value = 0;
		num1 = '';
		num2 = '';
		operator = '';
	});
	clearHistory.addEventListener('click', () => {
		let curHistory = document.querySelector('#hisText');

		while (curHistory.hasChildNodes()) {
			curHistory.removeChild(curHistory.firstChild);
		}
	});

	function addHistory() {
		let item = `${num1} ${operator} ${num2} = ${result}`;
		let li = document.createElement('li');
		let text = document.createTextNode(item);
		li.appendChild(text);
		document.getElementById('hisText').appendChild(li);
	}

	function resolve() {
		calc.value = result;
		num1 = '';
		num2 = '';
		operator = '';
	}

	function calculate() {
		if (operator && num2 != '') {
			if (operator == '+') {
				result = Number(num1) + Number(num2);

				addHistory();
				resolve();
			}

			if (operator == '-') {
				result = `${num1 - num2}`;
				addHistory();
				resolve();
			}

			if (operator == '/') {
				result = `${num1 / num2}`;
				addHistory();
				resolve();
			}

			if (operator == '*') {
				result = `${num1 * num2}`;
				addHistory();
				resolve();
			}
		}
		// calc.value = 0;
	}

	//modal functions

	function toggleModal() {
		modal.classList.toggle('show-modal');
	}

	function windowOnClick(event) {
		if (event.target === modal) {
			toggleModal();
		}
	}

	trigger.addEventListener('click', toggleModal);
	closeButton.addEventListener('click', toggleModal);
	window.addEventListener('click', windowOnClick);
};
