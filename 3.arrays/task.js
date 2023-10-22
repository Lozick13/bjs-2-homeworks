function compareArrays(arr1, arr2) {
	return arr1.every(
		(item, index) => item === arr2[index] && arr1.length == arr2.length
	)
}

module.exports = {
	compareArrays,
}
function getUsersNamesInAgeRange(users, gender) {
	let a = users.filter(number => number.gender == gender)

	if (a.length === 0) {
		return 0
	}

	let b =
		a.reduce((acc, item) => {
			return acc + item.age
		}, 0) / a.length
	return b
}

module.exports = {
	getUsersNamesInAgeRange,
}
