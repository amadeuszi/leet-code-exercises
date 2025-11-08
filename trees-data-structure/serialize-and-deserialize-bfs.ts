
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function serialize(root: TreeNode | null): string {
    const result: Array<string> = []
    
    let head = 0;
    const q: Array<TreeNode | null> = []
    if (root) {
        q.push(root)
    }

    while (head < q.length) {
        const current = q[head]
        head++
        if (current) {
            result.push(String(current.val))
            q.push(current.left, current.right)
        } else {
            result.push("")
        }
    }
    return result.join(",")
};

function deserialize(data: string): TreeNode | null {
    const buffer = data.split(",")
    const q: TreeNode[] = []
    let head = 0
    const rootValue = buffer[0]
    if (!rootValue) {
        return null
    }
    const root = new TreeNode(Number(rootValue))
    q.push(root)

    let i = 1
    while (head < q.length && i < buffer.length) {
        const parent = q[head++]
        if (buffer[i]) {
            parent.left = new TreeNode(Number(buffer[i]))
            q.push(parent.left)
        }
        i++
        if (buffer[i]) {
            parent.right = new TreeNode(Number(buffer[i]))
            q.push(parent.right)
        }
        i++
    }

    return root
};


const root = '1,2,3,,,4,5'
console.log(serialize(deserialize(root)))
const x = 3