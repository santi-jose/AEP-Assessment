/**
 * Definition for TreeNode.
 *
 *class TreeNode {
 *  constructor(val, left, right){
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 *  }
 *}
 *
 */

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function (list) {
  //Solution goes here

  // if we are given a null ptr, return 0
  // according to the tree definition, a null pointer
  // declares as a pointer with value of 0 and two null
  // left and right nodes
  if (list.val === 0) {
    if (list.left === null && list.right === null) {
      return 0;
    }
  }

  // variable to count nodes
  let nodes = 0;

  // helper function to help recursively iterate through binary tree
  const recursiveCount = (ptr) => {
    console.log(ptr);

    let left = ptr.left;
    let right = ptr.right;

    // if the left node is not null
    if (left !== null) {
      // recur to the left subtree
      recursiveCount(left);
    }

    // count the node we have visited, when we can't go further left
    nodes++;

    // if the right node is not null
    if (right != null) {
      // recur to the right subtree
      recursiveCount(right);
    }
  };

  recursiveCount(list);
  return nodes;
};
