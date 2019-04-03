const s = new Set([1, 2, 3, 4, 5]);
const it = s.values();
console.log(it);
// SetIterator {1, 2, 3, 4, 5}

let val = null;
while (!(val = it.next()).done) {
  console.log(val);
}
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: 4, done: false}
// {value: 5, done: false}

const it1 = s.values();
console.log([...it1]);
// (5) [1, 2, 3, 4, 5]

const it2 = s.values();
for (const val of it2) {
  console.log(val);
}
// 1
// 2
// 3
// 4
// 5

const it3 = s.values();
const arr = Array.from(Array(5), it3.next, it3).map(x => x.value);
console.log(arr);
// (5) [1, 2, 3, 4, 5]

/**
 * Array.from(arrayLike[, mapFn[, thisArg]]),mapFn->新数组中每个元素都会执行该Fn,this.Arg->fn时的this对象
 * 从一个类数组或可迭代对象中创建一个新的数组实例
 */
