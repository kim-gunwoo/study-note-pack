"use strict";

class Robot {
  constructor(name) {
    this.name = name;
  }
  clg() {
    console.log(this.name);
  }
}

class Ai extends Robot {
  constructor(name) {
    super(name);
  }
  clg2() {
    console.log(`clg2 : ${this.name}`);
  }
}

// static 메소드
class Test {
  constructor() {}
  fn() {}
  static stFn() {
    // constructor 에서 선언된 값들을 사용할 수 없음
    console.log(`static method`);
  }
}

Test.stFn();

// 비구조화
// 객체
const obj = {
  a: "a value",
  b: "b value",
};
const { a, b } = obj;
console.log(a, b);

// 배열
const arr = [1, 2, 3];
const [, c, d] = arr;
console.log(c, d);
