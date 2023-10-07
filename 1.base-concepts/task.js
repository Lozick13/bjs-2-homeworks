"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	let x = null;

	if (discriminant === 0) {
		x = -b / (2 * a);
		arr.push(x);
	} else if (discriminant > 0) {
		x = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr.push(x);

		x = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12;

	let creditBody = amount - contribution;
	let monthPayment = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let paymentAmount = +(monthPayment * countMonths).toFixed(2);

	return paymentAmount;
}