function dfs(current: TreeNode | null, acc: number[]): void {
    if (!current) {
        return
    }
    dfs(current.left, acc)
    acc.push(current.val)
    dfs(current.right, acc)
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result = []
    dfs(root, result)

    return result
};