/**数组展平*/
function flatten(arr) {
  return [].concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)));
}

/**函数节流 */
function throttle(func, delay = 60) {
  let lock = false;

  return (...args) => {
    if (lock) return;

    func(...args);
    lock = true;
    setTimeout(() => {
      lock = false;
    }, delay);
  };
}

/**
 * 低级的柯里化
 * curry(foo),函数=4,执行foo,否则积累参数
 */
const curry = func => {
  const g = (...allArgs) =>
    allArgs.length >= func.length
      ? func(...allArgs)
      : (...args) => g(...allArgs, ...args);
};
const foo = curry((a, b, c, d) => console.log(a, b, c, d));
