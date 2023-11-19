class Node {
    constructor(data) {
        if(typeof data === 'undefined' || typeof data === 'null') {
            throw new TypeError('El valor introducido No es Valido')
        }
        this.data = data
        this.next = null                
    }
}
class SimpleLinkedList {
    constructor(head = null) {
        this.head = head
    }
    getList() {
        const array = []
        let current = this.head
        if(this.head === null) return []
        while(current !== null) {
            array.push(current.data)
            current = current.next
        }
        return array
    }
}


export {
    SimpleLinkedList,
    Node,
}