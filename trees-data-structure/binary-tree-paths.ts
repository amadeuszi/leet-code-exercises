/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function paths(node: TreeNode | null): string[] {
    if (!node) {
        return []
    }
    if (!node.left && !node.right) {
        return [String(node.val)]
    }

    const left = paths(node.left)
    const right = paths(node.right)
    const all = left.concat(right)

    return all.map((s) => (node.val + "->" + s))
}

function binaryTreePaths(root: TreeNode | null): string[] {
    return paths(root)
};