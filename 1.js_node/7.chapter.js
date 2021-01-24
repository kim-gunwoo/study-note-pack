// TDD 프레임워크
/*
mocha -frame

Istanbul - lib

tape - lib

jest - frame

cypress - fram








*/

// Memory Leaks 메모리 유수
function study(v1, v2) {
  this.v1 = v1;
  this.v2 = v2;

  // 프로토타입 없이 작성시 문제가 발생
  // this.prototype.func1 = () => {
  this.func1 = () => {
    console.log();
  };
}

const problem = new study(undefined, undefined);
console.log(problem.func1());
problem.func1();

// Design patterns
// Functional Programming
{
  const numbers = [10, 20, 30, 40];

  const sum = numbers.reduce((tot, val) => tot + val);

  console.log(sum);

  const avg = numbers.reduce((tot, val, idx, arr) => {
    tot += val;
    if (idx === arr.length - 1) {
      return tot / arr.length;
    } else {
      return tot;
    }
  });

  console.log(avg);
}

//

{
  const numbers = [0, 1, 2, 3, 4, 5, 6];

  const res = numbers.reduce((tot, amt) => {
    if (amt > 0) tot.push(amt);
    return tot;
  }, []);

  console.log(res);
}

//

{
  const arr = ["pdf", "html", "html", "gif", "gif", "gif"];

  const solution = arr.reduce((cnt, fileType) => {
    cnt[fileType] = (cnt[fileType] || 0) + 1;
    return cnt;
  }, {});

  console.log(solution);
}

// Singletone pattern
{
  //
  class CacheManager {
    constructor() {
      if (!CacheManager.instance) {
        this._cahce = [];
        CacheManager.instance = this;
      }

      return CacheManager.instance;
    }
  }

  const instance = new CacheManager();
  Object.freeze(instance);

  //
}

/*

Adapter

Bridge

Decorator

Composite








*/

// 비동기패턴
{
  //
  console.log("Sample Class");

  class Sample {
    // Computed Property
    //*[Symbol.iterator] {
    *gen() {
      let cnt = 0;
      yield cnt++;
      yield cnt++;
      //yield cnt++;
    }
  }

  const sample = new Sample();
  const gen = sample.gen();

  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(Array.from(Sample));
  //
}

//

{
  //

  class DatabaseManager {
    constructor(settings) {
      this.settings = settings;
      this.init = init; // Promise cache
    }

    query() {
      // QUERY('') Agnostic
    }

    async init() {} // 최초 1회 실행

    async newMember() {
      //Pending
      await this.init();
    }

    async deleteMember() {
      await this.init();
    }
  }

  // static factory patterns

  class DatabaseManager {
    constructor() {}

    static async BUILD(settings) {
      const config = await this.init(settings);
      // 수행하고자 하는 모든 비동기 작업
      //return new DatabaseManager([Promise]);
      return new DatabaseManager(config);
    }

    query() {
      // QUERY('') Agnostic
    }

    async init() {} // 최초 1회 실행
    async newMember() {}
    async deleteMember() {}
  }

  const manager = DatabaseManager.BUILD(settings);
  //
}

//
// npm i co

{
  //
  const co = require("co");

  // generate 함수
  co(function* () {
    const a = Promise.resolve(1);
    const b = Promise.resolve(2);
    const c = Promise.resolve(3);
    const res = yield [a, b, c];
    console.log(res);
  });

  //
}
