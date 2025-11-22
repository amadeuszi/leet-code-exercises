function height(node: TreeNode | null): number {
    let h = 0
    let current = node
    while (current) {
        current = current.left
        h++
    }

    return h
}

function twoPowered(power: number): number {
    return (1 << power)
}

function countNodes(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const leftHeight = height(root.left)
    const rightHeight = height(root.right)


    if (leftHeight === rightHeight) {
        return twoPowered(leftHeight) + countNodes(root.right)
    } else {
        return twoPowered(rightHeight) + countNodes(root.left)
    }
};