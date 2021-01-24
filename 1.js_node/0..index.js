"use strict";
const arr = [1, 2, 3, "str1", "str2"];
const arr2 = [3, 4, 5];

// every
console.log(arr.every((e) => e > 1)); // false

// find
console.log(arr.find((e) => e === 1)); //  1

// includes
console.log(arr.includes((e) => e === 1)); // false

// forEach
arr.forEach((e) => {
  console.log(`forEach < `, e);
});

// map
console.log(arr.map((e) => e + 1));

// filter
console.log(arr.filter((e) => e > 2));

// Object.assign
console.log(Object.assign(arr, arr2));

// spread
console.log({
  ...arr,
  ...arr2,
});

// set
const setTest = new Set();

setTest.add(1);
setTest.add(2);
setTest.add(2);
setTest.add(3);
setTest.add(4);

for (const e of setTest) {
  console.log(`for of `, e);
}

// has
setTest.has(3); // true

// some
const someArr = [0, -1, -2];
console.log(someArr.some((e) => e < 0));

// template String
console.log`  wow   `;

// String
let str = "abcdedf";

console.log(str.startsWith("a"));
console.log(str.includes("def"));
console.log(str.endsWith("f"));

// Type checking
const strType = "string";
const arrType = [];
const objType = {};
const numType = 1;

console.log(typeof strType);
console.log(typeof arrType); // object 안에 array 가 존재
console.log(typeof objType);
console.log(typeof numType);

// Hoisting
// 선언 이전에 사용할수 있음
testHoisting("Test Hoisting");
function testHoisting(val) {
  console.log(val);
}

// IIFE 즉시실행되는 자바스크립트 함수
(function () {
  var lang = "test js";
})();
// console.log(lang); // 즉시실행함수 내부의 변수에 접근할 수 없음
const iifeTest = (function () {
  var lang = "test js";
  return lang;
})();
console.log(iifeTest);

// setInterval()
setInterval(() => {
  console.log("setInterval");
}, 1000);

// Error handling
try {
  a;
} catch (err) {
  console.log(err);
}

// Curried Function
const allwFunc = (a, b) => a * b;
const curriedFunc = (a) => (b) => a * b;
/*
es5
function curriedFunc(a) {
  return function ClosureFunc(b) {
    return a * b;
  };
}
*/
const getFunc = curriedFunc(3);
console.log(getFunc);
console.log(getFunc(100));
