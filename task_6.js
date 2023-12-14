// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
console.log('Задача 6');
const array1 = [1, 1, 1, 1, 1, 1, 2];
const array2 = [7, 7, 7, 7, 7, 7, 7];

console.log('Пример 1');
console.log(array1);
for (let i = 0; i < array1.length - 1; i++) {
	if (array1[i] === array1[i + 1]) {
		var count1 = 1;
	} else {
		var count1 = -1;
	}
}
// Чтобы вывести переменную count1 из области видимости цикла for, 
// не придумал ничего лучше, чем объявить её через var
if (count1 === 1) {
	console.log(`Одинаковые ли элементы в массиве? Ответ: ` + true);
} else if (count1 === -1) {
	console.log(`Одинаковые ли элементы в массиве? Ответ: ` + false);
} else {
	console.log('Ну тогда я не знаю как решать, опыта маловато');
}
console.log('\n');


console.log('Пример 2');
console.log(array2);
for (let i = 0; i < array2.length - 1; i++) {
	if (array2[i] === array2[i + 1]) {
		var count2 = 1;
	} else {
		var count2 = -1;
	}
}

if (count2 === 1) {
	console.log(`Одинаковые ли элементы в массиве? Ответ: ` + true);
} else if (count2 === -1) {
	console.log(`Одинаковые ли элементы в массиве? Ответ: ` + false);
} else {
	console.log('Ну тогда я не знаю как решать, опыта маловато');
}
console.log('\n');

















