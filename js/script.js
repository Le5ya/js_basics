let boss;
let name = "Lilia";
boss = name;
alert(`Добрый день, ${boss}`);

let a = "" + 2 + 0; 
console.log(a);
// Получилось 20,конкатенация строк, потому что первой и идёт строка, остальные данные приводятся к типу "строка"
let b = "" - 2 + 0;
// - 2, хотя первой стоит пустая строка, минус перед строковым значением преобразует его в число 
console.log(b);

console.log("4" > "22");
//true, Строки сравниваются посимвольно. Если первый символ первой строки больше, чем первый символ второй, то первая строка больше  второй. 4 > 2
let d = 4 + 7 + "px";
//11, "работа" движется слева направо. Поэтому числа 4 + 7 еще не дошли до строки "px" и дают в результате 11 . 
console.log(d);
let f = "3px" - 5;
console.log(f);
// NaN, от строки отнимаем число,  была выполнена бессмысленная операция

let ab = "30px" + "50px";
console.log(ab);
// "30px50px", сложение строк, конкаттенация
let bc = "50px" - "30px";
console.log(bc);
// NaN, была выполнена бессмысленная операция
