// 终于看懂了,还是函数式编程爽,妙啊,突然发现命令式编程好多余
/**
 *初始值是个[],注意[...str].reduce((stack,c)=>{},[])的传值
 *基于栈,先入先出,如匹配[()],match就出栈,length-1;否则入栈,length+1;
 *最后看length是否==0
 *REVIEW:
 */
function match(a, b) {
  return (a === '[' && b === ']') || (a === '(' && b === ')');
}
function is_balance(str) {
  return (
    [...str].reduce((stack, c) => {
      match(stack[stack.length - 1], c) ? stack.pop() : stack.push(c);

      return stack;
    }, []).length === 0
  );
}

// 没看懂啊
/**
 * 真的是没看懂
 * expr1 && expr2	若 expr1 可转换为 true，则返回 expr2；否则，返回 expr1。
 * expr1 || expr2	若 expr1 可转换为 true，则返回 expr1；否则，返回 expr2。
 * 字符串也能解构啊
 * shift,把数组中的第一个元素删除,并返回那个元素
 */

// function is_balance(str) {
//   const [first, ...others] = str;
//   first;
//   others;
//   const stack = [first];
//   stack;

//   while (others.length > 0) {
//     const c = stack[stack.length - 1];
//     c;
//     const n = others.shift();

//     if (!match(n, c)) {
//       stack.push(n);
//       stack;
//     } else {
//       stack.pop();
//       stack;
//     }
//   }

//   return stack.length === 0;
// }

// function match(n, c) {
//   return (c == '[' && n == ']') || (c == '(' && n == ')');
// }

// // match(']','[')只有这两种情况才返回true
// // match(')','(')

// is_balance('[(())]');
