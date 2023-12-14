// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.
console.log('Задача 8');
let arrayMap = new Map();
arrayMap.set(1, 'букварь');
arrayMap.set('два', 'вторая');
arrayMap.set(3, 'синяя');

console.log('С помощью цикла for...of');
for (let [key, value] of arrayMap) {
	console.log(`Ключ - ${key} , значение - ${value}`);
}

console.log('\n');
console.log('Google помог. С помощью цикла forEach и стрелочной функцией (пока хз как это работает)))) ');
arrayMap.forEach((value, key) => {
	console.log(`Ключ - ${key} , значение - ${value}`);
});







