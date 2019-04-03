// 中文排序
const values = ['王成成', '王峰', '蒋雪', '李明'].sort((a, b) =>
  a.localeCompare(b, 'zh'),
);

console.log(values);

//["蒋雪", "李明", "王成成", "王峰"]

// localeCompare这个方法浏览器内部有实现;
