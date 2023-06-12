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

let students = [];
let i = 0;
let x = prompt("Имя студента.");
function studentsList() {
while(x) {
  students[i] = x;
  i++;
  x = prompt("Имя студента");
}
  console.log(`${students}.`);
  // alert(`${students}.`);
  
}
studentsList();

function checkCart (goodsQuantity, totalCost, promoCode) {
  let finalCost = totalCost;
 
   if ( goodsQuantity > 10 && goodsQuantity <= 20) {
    finalCost = finalCost - (finalCost / 100) * 5;
  } else if (goodsQuantity > 20) {
    finalCost = finalCost - (finalCost / 100) * 10;
  }
  
 if (totalCost > 10000) {
   finalCost = finalCost - 1000;
  }
 
  if (promoCode && promoCode.toLowerCase() === "methed") {
    finalCost = finalCost - (finalCost / 100) * 15;
  } 

  console.log(`
  Итоговая стоимость ${finalCost}`);

  return finalCost;

}
(checkCart(11, 19000, "methed" ));



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
