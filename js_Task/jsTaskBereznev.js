
// Задание 1 Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число,
//  затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
let end = 0;
while (end !== 1) {
   let answer = prompt('Введите число:');
   if (answer === null) {
      alert('Упс, вы нажали кнопку "отмена"')
      break;
   }
   answer = +answer;
   if (Number.isNaN(answer)) {
      console.log('Упс, кажется, вы ошиблись и ввели не число')
   } else {
      console.log('Правильно, вы ввели число')
      end = 1;
      if (answer % 2 === 0) {
         console.log('Число чётное')
      } else {
         console.log('Число не чёнтое')
      }
   }
   console.log(answer);
   console.log(typeof answer);
}
console.log(end);


// Задание 2
// Дана переменная x, которая может принимать любое значение.Написать программу, 
// которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
// Опишите три случая: когда х = числу, строке или логическому типу.
//  В других случаях выводите сообщение: «Тип x не определён».

let varX = 45;
switch (typeof varX) {
   case 'number':
      console.log('X - number');
      break;
   case 'string':
      console.log('X - string');
      break;
   case 'boolean':
      console.log('X - boolean');
      break;
   default:
      console.log('out of range');
}
console.log(varX);
console.log(typeof varX);


// Задание 3 Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
//  Например, "Hello" -> "olleH".
const str = 'Привет';
let backstr = '';
for (let i = 0; i <= str.length; i += 1) {
   backstr = backstr + (str.slice(str.length - i, str.length - i + 1));
}
console.log(backstr);

// Задание 4 Записать в переменную случайное целое число в диапазоне [0; 100].
// Используйте объект Math.
let rndNumber = Math.round(Math.random() * 100);
console.log(rndNumber);

// Задание 5 Дан произвольный массив. Необходимо вывести количество элементов массива,
//  затем перебрать его и вывести в консоль каждый элемент массива.
const array = ['нулевой', 'первый', 'второй', 'третий', 'четвёртый', 'пятый'];

console.log(array.length);
for (i = 0; i < array.length; i += 1) {
   console.log(array[i]);
}

//   Задание 7 
//   Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//   Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//   При выполнении задания необходимо учесть, что массив может содержать не только числа,
//   но и, например, знаки, null и так далее.
const array = [2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 'f', 'f', "dfg", '-', null];
let even = 0;
let notEven = 0;
let zero = 0;
let notNumber = 0;

for (let num of array) {
   num = +num;
   if (Number.isNaN(num)) {
      notNumber++
   } else if (num === 0) {
      zero++
   } else if (num % 2 === 0) {
      even++
   } else if (num % 2 !== 0) {
      notEven++
   }
}
console.log(`${even} элемента массива четные числа`);
console.log(`${notEven} элемента массива нечетные числа`);
console.log(`${zero} элемента массива равны 0`);
console.log(`${notNumber} элемента массива не числа`);
