/**
 * console.log(tree.v)的位置是关键
 */

// 先序
function tree_transverse(tree) {
  console.log(tree.v);
  tree.children && tree.children.forEach(tree_transverse);
}

// 后序
function tree_transverse_l(tree) {
  tree.children && tree.children.forEach(tree_transverse_l);
  console.log(tree.v);
}

// 中序
function tree_transverse_m(tree, ord = 0) {
  let transversed = false;
  /**没有后代的直接输出 */
  if (!tree.children) {
    console.log(tree.v);
    return;
  }
  tree.children.forEach((child, i) => {
    /**经过遍历,没有后代直接输出 */
    if (i === ord) {
      transversed = true;
      console.log(tree.v);
    }
    /**有后代,继续遍历 */
    tree_transverse_m(child, ord);
  });
  /**这里是给tree_transverse_m(child, ord)这一步使用的,
   * 经过最终的遍历,得到这种情况let transversed = false;
                            if (!tree.children) {
                            console.log(tree.v);
                            return;
  }
   */
  !transversed && console.log(tree.v);
}

tree_transverse_m(tree, 0);
// 10 5 3 7 11 2
tree_transverse_m(tree, 3);
// 5 7 11 3 2 10
tree_transverse_m(tree, 1);
// 5 10 7 3 11 2
