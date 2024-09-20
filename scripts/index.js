const num = 266219;
const multiplication = num
	.toString()
	.split('')
	.reduce((acc, item) => acc * item, 1);
console.log(multiplication);
const exponentiation = multiplication ** 3;
console.log(exponentiation);
console.log(exponentiation.toString().substring(0, 2));
