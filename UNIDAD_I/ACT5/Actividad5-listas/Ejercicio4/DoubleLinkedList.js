class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    if(value) {
        this.append(value)
    }

    append(value) {
        if(typeof value === 'undefined') throw new TypeError
        if(typeof value === 'null') throw new TypeError

        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    getList() {

        const array = []
        let currentNode = this.head
        if (currentNode === null) {
            return []
        }else {
            while (currentNode !== null) {
                array.push(currentNode.value)
                currentNode = currentNode.next
            }
        }
        
        return array

    }
    reverse() {
          if (this.length === 0) return
          if (this.length === 1) return this
      
          let currNode = this.head
          let prevNode = null
          let nextNode = null
      
          while (currNode) {
              nextNode = currNode.next
              prevNode = currNode.prev
      
              currNode.next = prevNode
              currNode.prev = nextNode

              prevNode = currNode
              currNode = nextNode
          }
      
          this.tail = this.head
          this.head = prevNode
      
          return this
      }
}
export {
    DoublyLinkedList
}

