const firstName = prompt('Напишите ваше имя?');
console.log(firstName);

function user() {
  let age = prompt('Возраст?', 20);
  
  if (age < 20) {
    alert(`Привет, ${firstName}!`);
  } else if (age >= 20 && age < 45) {
    alert(`Здравствуй, ${firstName}!`);
  } else  if (age >= 45){
    alert(`Здравствуйте, ${firstName}!`);
  }
    
}
user();

const students = ['Aнтон', 'Иван', 'Борис', 'Влад', 'Григорий'];
for (let i = 0; i < students.length; i++) {
 let x = prompt(`${students}.`);
 if (x) {
  alert(`${x}`);

 } else {
  alert(`${students}.`);
 }
  
}
function checkCart (goodsQuantity, totalCost, promoCode) {
  let finalCost;
  let discount_1;
  let discount_2;
  let discount_3;
  
  goodsQuantity = prompt("Количество", 10);
  totalCost = prompt("Общая стоимость", 10000);
  promoCode = prompt("Введите промокод");
  promoCode = promoCode.toLowerCase();
  console.log(promoCode);

  if (goodsQuantity > 0 && goodsQuantity <= 10 ) {
    discount_1 = 0;
  } else if ( goodsQuantity > 10 && goodsQuantity <= 20) {
    discount_1 = (totalCost / 100) * 5;
  } else if (goodsQuantity > 20) {
    discount_1 = (totalCost / 100) * 10;
  }
  

  if (totalCost > 0 && totalCost <= 10000) {
    discount_2 = 0;
  } else if (totalCost > 10000) {
    discount_2 = 1000;
  }
 
  if (promoCode === "methed") {
    discount_3 = (totalCost / 100) * 15;
  } else {
    discount_3 = 0;
  }
  discount = discount_1 + discount_2 + discount_3;
  finalCost = totalCost - discount;

  alert(`
  Общая стоимость ${totalCost},
  Скидка по количеству ${discount_1},
  Скидка по общей стоимости ${discount_2},
  Скидка по промокоду ${discount_3},
  Суммарная скидка ${discount},
  Итоговая стоимость ${finalCost}`);

  return finalCost;

}
(checkCart());



// let boss;
// let name = "Lilia";
// boss = name;
// alert(`Добрый день, ${boss}`);

// let a = "" + 2 + 0; 
// console.log(a);
// // Получилось 20,конкатенация строк, потому что первой и идёт строка, остальные данные приводятся к типу "строка"
// let b = "" - 2 + 0;
// // - 2, хотя первой стоит пустая строка, минус перед строковым значением преобразует его в число 
// console.log(b);
// const boolean = "4" > "22"
// console.log(boolean);
// //true, Строки сравниваются посимвольно. Если первый символ первой строки больше, чем первый символ второй, то первая строка больше  второй. 4 > 2
// let d = 4 + 7 + "px";
// //11px, "работа" движется слева направо. Поэтому числа 4 + 7, пока не дошли до строки "px",  дают в результате 11 . После этого происходит конкатенация строк. "...если хотя бы один операнд является строкой, то второй будет также преобразован в строку." Трепачёв
// console.log(d);
// let f = "3px" - 5;
// console.log(f);
// // NaN, от строки отнимаем число,  была выполнена бессмысленная операция

// let ab = "30px" + "50px";
// console.log(ab);
// // "30px50px", сложение строк, конкаттенация
// let bc = "50px" - "30px";
// console.log(bc);
// // NaN, была выполнена бессмысленная операция
