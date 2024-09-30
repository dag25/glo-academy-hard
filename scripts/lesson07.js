const week = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
	'sunday',
];


const divElem = document.createElement('div');
divElem.className = 'week';
document.body.append(divElem);
console.log(divElem);
const currentDate = new Date();
console.log(week[currentDate.getDay()]);


week.forEach((day) => {
  const p = document.createElement('p');
  p.textContent = day;

  divElem.appendChild(p);

});
const days = document.querySelectorAll('p');
days.forEach((day) => {
	if (day.textContent === week[currentDate.getDay()]) {
    day.style.fontWeight = 'bold';
  }
	if (day.textContent === 'saturday' || day.textContent === 'sunday') {
    day.style.fontStyle ='italic';
  }
});
