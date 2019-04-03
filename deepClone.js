function clone(obj) {
  if (obj == null || typeof obj !== 'object') return obj;

  let newObj = null;

  // 时间对象有特殊性
  if (obj.constructor === Date) {
    newObj = new obj.constructor(obj);
  } else {
    newObj = obj.constructor();
  }
  //原型链上的不应该拷贝
  for (let key in Object.getOwnPropertyDescriptors(obj)) {
    newObj[key] = clone(obj[key]);
  }
  return newObj;
}

[].constructor === Array;
Array.isArray([]);
Object.prototype.toString.call([]);
