
const height = (node: TreeNode | null): number => {
    if (node === null) {
        return 0
    }
    
    return height(node.left) + 1
}

function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    
    const hLeft = height(root.left)
    const hRight = height(root.right)
    if (hLeft === hRight) {
        const left = Math.pow(2, hLeft) - 1
        return left + 1 + countNodes(root.right)
    } else {
        const right = Math.pow(2, hRight) - 1
        return right + 1 + countNodes(root.left)
    }
};