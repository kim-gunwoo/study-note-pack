// Generate
// yield
// return
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();

gen.next("zero");
gen.next("first");
gen.next("second");

const obj = {
  *gen() {
    let cnt = 0;
    yield ++cnt;
    yield ++cnt;
    yield ++cnt;
  },
};

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());

// Timers
const timeout = setTimeout(() => {
  console.log(`setTimeout`);
}, 1000); // 최소 지연시간

const immediate = setImmediate(() => {
  console.log(`setImmediate`);
}, 1000);

const interval = setInterval(() => {
  console.log(`setInterval`);
}, 1000);

clearTimeout(timeout);
clearImmediate(immediate);
clearInterval(interval);
