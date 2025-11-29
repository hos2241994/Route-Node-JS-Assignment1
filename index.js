/* ==========================    Assignment 1 =============================== */
/*===================== A.Part 1 =======================*/
//========================
//#1
// function textToNumber(text) {
//   const txtToNumber = Number(text);
//   return txtToNumber;
// }

// const newNumber = textToNumber("123") + 7;

// console.log(typeof newNumber, newNumber);
//=======================

//#2
// function checkTruthy(val) {
//   if (!val) {
//     return "Invalid";
//   } else {
//     return "Valid";
//   }
// }

// console.log(checkTruthy(0));
//=====================

//#3
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
//===========================

//#4
// const arr = [1, 2, 3, 4, 5];

// const evenArr = arr.filter((item) => item % 2 == 0);

// console.log(evenArr);
//===========================

//#5
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
//============================

//#6
// function dayOfWeek(num) {
//   switch (num) {
//     case 1:
//       return "Sunday";

//     case 2:
//       return "Monday";

//     case 3:
//       return "Tuesday";

//     case 4:
//       return "Wednesday";

//     case 5:
//       return "Thursday";

//     case 6:
//       return "Friday";

//     case 7:
//       return "Saturday";

//     default:
//       break;
//   }
// }

// console.log(dayOfWeek(2));
//===============================

//#7
// const arr1 = ["a", "ab", "abc"];
// const arr2 = arr1.map((item) => item.length);
// console.log(arr2);
//===============================

//#8
// function divisible(num){
//     if(num % 3 ===  0 && num % 5 === 0){
//         return "Divisible by both"
//     }
// }

// console.log(divisible(15))
//===============================

//#9
// const square = num => num * num;
// console.log(square(5));
//==============================

//#10
// function destructureObject(obj) {
//   const {name, age} = obj;
//   return `${name} is ${age} years old`;
// }
// console.log(destructureObject({ name: "John", age: 25 }));
//==============================

//#11
// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
//=========================

//#12
// function success(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>  {
//             resolve("Success")
//         }, 3000)
//     })
// }

// success().then((msg) => console.log(msg))
//==========================

//#13
// function getMax(arr){
//     const max = Math.max(...arr)
//     return max;
// }
// console.log(getMax([1, 3, 7, 2, 4]));
//==============================

//#14
// function getKeys(obj) {
//   const arr = [];

//   for (const key in obj) {
//     arr.push(key);
//   }

//   return arr;
// }
// console.log(getKeys({ name: "John", age: 30 }));
//==========================

//#15
// function splitTxt(str){
//     return str.split(' ');
// }
// console.log(splitTxt("The quick brown fox"));
//=========================

/*===================== B.Part 2 =======================*/
//#1
/*What is the difference between forEach and for...of?
 When would you use each?
 == ForEach used only for array
 for..of used for any iterable like array, string , map.
choosing of forEach or for..of depending on complexity of.
if it simple iteration the choice will be forEach
 */
//==========================

//#2
/* What is hoisting and what is the Temporal Dead Zone (TDZ)?
 Explain with examples.
 hoisting is moving variables and functions declaration at the top
  before initialization it works fine with var and function declaration but it is not working
  with let , const and function expression.
  TDZ is related to let and const it is the time between declaration and initialization ,
  during this period you can not access variables like var 
 
 example:
 console.log(x) //undefined {var x; is hoisted at the top before declaration}
 var x = 5;
======================
 console.log(sum()) // 3 {function hoisted completely at the top }
 function sum(){
 return (1+2)
 }
 ===================
  console.log(x) //Cannot access 'x' before initialization 
 let x;

*/
//===========================

//#3
/*
What are the main differences between == and ===?
== used for comparing value 
=== used for comparing value and type
example:
5=="5" //True
5==="5" // False
 */
//===========================

//#4
/*
Explain how try-catch works and why it is important in async operations?
it used in asynchronous but in synchronous way . it handle errors without
crashing entire program and more readable.

async function fetchUrl() {
  try {
    const res = await fetch("Url");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log( err);
  }
}

getUser();
 */
//====================================

//#5
/*
What’s the difference between type conversion and coercion? 
Provide examples of each.
Coercion is transform the type of variable by program it self like concatenation.
Example:console.log(5 + "5")//"55"

Conversion is transform of the type of variable by developer like get a value from 
input tag in html and convert it to number.
Example: const x = Number(document.getElementById("input"));
 */
