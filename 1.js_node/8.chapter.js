// Race Conditions
/*
 */
{
  [0, 1, 2].map((item) => {});

  [Promise1, Promise2].map(async (item) => {
    // 비동기 코드
    // await
    //맵에서는 비동기 코드를 사용하면 문제가 발생함
  });

  const arr = [Promise1, Promise2];

  arr.forEach(async (item) => {
    // 비동기 x
  });

  for (const item of arr) {
    // 비동기 코드 가능
  }
}
/*
예제
*/

let total = 0;
async function getTotal() {
  return total;
}

async function setTotal(value) {
  return value;
}

async function increment(value, inc) {
  return value + inc;
}

async function add() {
  let current, newValue;
  current = await getTotal();
  newValue = await increment(current, 20);
  await setTotal(newValue);
}

async function main() {
  let transaction1, transaction2;
  transaction1 = add();
  transaction2 = add();
  await transaction1;
  await transaction2;
  console.log(await getTotal());
}

// 위 문제 아래 해결

class Lock {
  constructor() {
    this._locked = false;
    this._waiting = [];
  }
  lock() {
    const unlock = () => {
      let nextResolve;
      if (this._waiting.length > 0) {
        nextResolve = this._waiting.pop(0);
        nextResolve(unlock);
      } else {
        this._locked = false;
      }
    };
    if (this._waiting) {
      return new Promise((resolve) => {
        this._waiting.push(resolve);
      });
    } else {
      this._locked = true;
      return new Promise((resolve) => {
        resolve(unlock);
      });
    }
  }
}

const account = new Lock();

async function add() {
  let current, newValue;

  unlock = await account.lock();

  current = await getTotal();
  newValue = await increment(current, 20);
  await setTotal(newValue);

  await unlock();
}

async function main() {
  let transaction1, transaction2;
  transaction1 = add();
  transaction2 = add();
  await transaction1;
  await transaction2;
  console.log(await getTotal());
}

//

/*

* CPU Profiling
nsolid
https://nodesource.com/products/nsolid

* Heap Snapshot
chrome


*/
