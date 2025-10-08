function generateTrees(n: number): Array<TreeNode | null> {
    const memo: Record<string, Array<TreeNode | null>> = {}

    function generateT(left: number, right: number): Array<TreeNode | null> {
        if (left > right) {
            return [null]
        }
        const hash = left + "," + right
        if (memo[hash]) {
            return memo[hash]
        }

        const trees = []
        for (let current = left; current <= right; current++) {
            const leftTrees = generateT(left, current - 1)
            const rightTrees = generateT(current + 1, right)

            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    const tree = new TreeNode(current, leftTree, rightTree)
                    trees.push(tree)
                }
            }
        }

        memo[hash] = trees
        return trees;
    }

    return generateT(1, n);
};