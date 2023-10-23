function parseCount(value) {
	if (isNaN(Number.parseFloat(value))) {
		throw new Error('Невалидное значение')
	}
	return +value
}
function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) {
		return error
	}
}
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return new BreakTriangle()
	}
}
class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
		this.a = a
		this.b = b
		this.c = c
	}
	get perimeter() {
		let a = this.a
		let b = this.b
		let c = this.c
		let p = a + b + c
		return p
	}
	get area() {
		let a = this.a
		let b = this.b
		let c = this.c
		let p = (a + b + c) / 2
		let s = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3)
		return +s
	}
}
class BreakTriangle {
	get perimeter() {
		return 'Ошибка! Треугольник не существует'
	}
	get area() {
		return 'Ошибка! Треугольник не существует'
	}
}
