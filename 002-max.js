const A = [1, 2, 3, 5, 6];
const max = Math.max(...A);
// 等价于 ： const max = Math.max.apply(null, A) , 早期写法
// 等价于 ： const max = Math.max(1,2,3,5,6)

// 同理
const min = Math.min(...A);

function find_max(arr) {
  /**负无穷大 */
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }

  return max;
}
