function yulduzcha(n) {
	let result = ''
	for (let i = 0; i < n; i++) {
		for (let k = 0; k < i; k++) {
			result += '* '
		}
		result += '\n'

	}
	return result
}

function yulduzcha2(n) {
	let result = ''
	for (let i = n; i > 0; i--) {
		for (let k = i; k > 0; k--) {
			result += '* '
		}
		result += '\n'

	}
	return result
}

console.log(yulduzcha(5));

console.log(yulduzcha2(5))

