function* flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* flatten(arr[i]);
    } else {
      yield arr[i];
    }
  }
}
console.log([...flatten([1, 2, [3, 4, [[5]]]])]);
// (5)[1,2,3,4,5]

//妙啊,wonderful

function flatten(arr) {
  return [].concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)));
}
