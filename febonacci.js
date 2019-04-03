/**斐波那其全攻略 */

function febonacci(n) {
  let prev = 1;
  let next = 1;
  let i = 2;
  while (i++ < n) {
    const t = next;
    next = prev + next;
    prev = t;
  }
  return next;
}

function factorial(n) {
  return n === 0 ? 1 : factorial(n - 1) * n;
}

/**
 * fill(),用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
 */

// 指数级别的时候是个灾难,(2,10)时1024,(2,20)百万级别
function fibonacci(n) {
  // 这个返回的方法妙啊
  return n == 1 || n == 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// 线性
/**
 * 先用fill(),得到undefiled去填充才能循环
 * 这里的[1],是为得到[b,a+b]中的最后一项
 *
 */
function fibonacci(n) {
  return Array(n)
    .fill()
    .reduce(
      ([a, b], _) => {
        return [b, a + b];
      },
      [0, 1],
    )[1];
}

//NOTE:简单高效
function fibonacci(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// REVIEW:妙啊
function* fibonacci() {
  let a = 1,
    b = 1;
  /**这里的两个yield主要是由斐波那契定义 */
  yield a;
  yield b;
  while (true) {
    const t = b;
    b = a + b;
    a = t;
    const x = yield b;
  }
}
const it = fibonacci();
const feb10 = Array.from(Array(10), it.next, it).map(x => x.value);
console.log(feb10);
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
