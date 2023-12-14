// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.
console.log('Задача 5');
let array = [1, 5, 9, 15, 35, 57, 98];
console.log(array);
console.log(`Количество элементов массива: ${array.length}`);
console.log('\n');

// через цикл for
console.log('через цикл for'); 
for (let i = 0; i < array.length; i++) {
	console.log(`Элемент массива ${[i]}: ${array[i]}`);
}

console.log('\n');
// через цикл forEach
console.log('через цикл forEach');
array.forEach(function(item, index, array) {
	console.log(`Элемент массива ${index}: ${item}`);
});
console.log('\n');
