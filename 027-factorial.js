function factorial(n) {
  return n === 0 ? 1 : factorial(n - 1) * n;
}

console.log(factorial(10));
//阶乘
