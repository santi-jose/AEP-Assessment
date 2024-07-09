const countNodeTree = require("./count-tree-node")

class TreeNode {
  constructor(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

describe("Count the Nodes in a Tree", () => {
  test("[1, 2, 3, 4, 5, 6] should return 6", () => {
    const tree = new TreeNode(1)

    tree.left = new TreeNode(2, new TreeNode(4), new TreeNode(5))

    tree.right = new TreeNode(new TreeNode(3), new TreeNode(6))

    expect(countNodeTree(tree)).toBe(6)
  });

  test("[] should return 0", () => {
    expect(countNodeTree(new TreeNode())).toBe(0);
  });

  test("[1] should return 1", () => {
    expect(countNodeTree(new TreeNode(1))).toBe(1)
  });
});