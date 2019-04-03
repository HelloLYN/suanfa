/**
 * Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
 * Array.from('foo')->["f", "o", "o"]
 * Array.from([1, 2, 3], x => x + x)->[2,4,6]
 */

// 这个解法和最后一种有啥区别???感觉不过是两次循环的方式换了种
function solve(xs, n) {
  const rs = new Set();
  for (const x of xs) {
    for (const r of Array.from(rs)) {
      rs.add((r + x) % n);
    }
    rs.add(x % n);
  }
  return rs.has(0);
}

function solve(arr, N) {
  const s = new Set([arr.shift() % N]);
  while (arr.length > 0) {
    const ak = arr.shift();
    const items = [...s];
    items.forEach(x => {
      s.add((x + ak) % N);
    });
    s.add(ak);
  }
  return s.has(0);
}

function solve(arr, N) {
  function S(k) {
    if (k == 0) {
      return new Set([arr[0] % N]);
    }
    const set = S(k - 1);
    set.add(arr[k]);
    set.forEach(item => {
      set.add((item + arr[k]) % N);
    });
    return set;
  }
  return S(arr.length - 1).has(0);
}

/* 这个是最简单粗暴的,把数组中的所有可能值都求和了 */
function solve(arr, N) {
  const s = new Set();
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const remain = arr.slice(i, j).reduce((x, y) => x + y, 0) % N;

      s.add(remain);
    }
  }
  return s.has(0);
}

console.log(solve([1, 2, 3], 7));
