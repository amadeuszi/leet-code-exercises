function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
       return true
    }
    if (p === null || q === null) {
       return false
    }

    const isValueSame = p.val === q.val

    return isSameTree2(p.left, q.right) && isValueSame && isSameTree2(p.right, q.left)
};

function isSymmetric(root: TreeNode | null): boolean {
   if (!root) {
       return true
   }

   return isSameTree2(root.left, root.right)
};