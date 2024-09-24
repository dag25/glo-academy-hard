const num = 266219;
const multiplication = num
	.toString()
	.split('')
	.reduce((acc, item) => acc * item, 1);
console.log(multiplication);
const exponentiation = multiplication ** 3;
console.log(exponentiation);
console.log(exponentiation.toString().substring(0, 2));

let lang = 'en';
let daysEn = 'monday, tuesday, wednesday, thursday, friday, saturday, sunday';
let daysRu = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';

if (lang === 'en') {
	console.log(daysEn);
}else {
	console.log(daysRu);
}
switch (lang) {
	case 'en':
		console.log(daysEn);
		break;

	case 'ru':
		console.log(daysRu);
		break;
}

const arr = [];
arr.ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
arr.en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(arr[lang]);

const namePerson = 'Артем';
namePerson === 'Артем'
	? console.log('директор')
		: namePerson === 'Александр'
		? console.log('преподаватель')
	: console.log('студент');
