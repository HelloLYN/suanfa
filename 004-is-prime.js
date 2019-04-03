function is_prime(n) {
  if (n <= 1) {
    return false;
  }
  const N = Math.floor(Math.sqrt(n));
  let is_prime = true;
  for (let i = 2; i <= N; i++) {
    if (n % i === 0) {
      is_prime = false;
      break;
    }
  }
  //注意要返回的问题,不返回在n>2的情况下都会返回undefined
  return is_prime;
}

for (let i = 0; i < 1000; i++) {
  if (is_prime(i)) console.log(i);
}

// 妙啊
function* sieve_primes(n) {
  // 从2开始
  let numbers = Array.from({ length: n - 2 }, (_, i) => i + 2); // N

  let p = null;
  while ((p = numbers.shift())) {
    yield p;
    numbers = numbers.filter(t => t % p !== 0);
  }
}

const it = sieve_primes(100);
console.log([...ite]);

for (const prime of sieve_primes(100)) {
  console.log(prime);
}

/**
 * 先列出来 :2  3 4  5  6 7  8  9  10 11 12 13 14 15
 * 去掉能被2除的:3 5 7 9 11 13 15
 * 5 7 11 13
 * 7 11 13
 */
