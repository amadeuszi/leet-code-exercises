
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

Array(5).fill
 

const setNext = (node: ListNode | null | undefined, next: ListNode | null | undefined): void => {
    if (!node) {
        return
    }
    node.next = next ?? null
}

const swapFollowingTwoNodes = (current: ListNode): void => {
    if (!current) {
        return
    }

    const first = current?.next;
    const second = current?.next?.next
    const third = current?.next?.next?.next

    setNext(current, second)
    setNext(second, first)
    setNext(first, third)
}

const forEach = (head: ListNode, callback: ((current: ListNode, index: number) => void)): void => {
    let iterator: ListNode | null = head
    let index = 0
    while (iterator) {
        callback(iterator, index)
        iterator = iterator.next
        index++
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    const fakeHead = new ListNode(0, head);

    forEach(fakeHead, (current, index) => {
        if (index % 2 === 1) {
            return
        }
        swapFollowingTwoNodes(current)
    })

    return fakeHead.next
};

const convertToList = (tab: number[]): ListNode | null => {
    const fakeHead = new ListNode(1, null)
    let current = fakeHead
    for (const item of tab) {
        let newNode = new ListNode(item, null)
        current.next = newNode
        current = newNode
    }
    return fakeHead.next
}

const tab = [1, 2, 3, 4]
const list = convertToList(tab)

swapPairs(list)
