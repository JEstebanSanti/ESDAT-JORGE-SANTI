class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
export class SinglyCircularLinkedList {
    constructor(data) {
        this.head = null
        this.tail = null
        this.length = 0;
        if(data) {
            this.init
        }
    }
    

    // init Inicializar La lists si viene el constructor
    init(data) {
        // Revisar datos 
        if(typeof data !== 'number') {
            throw new RangeError('No es un entero')
      
        }
          if(!Number.isInteger(data)){
            throw new RangeError('No es un entero')
        }
          if(data < 0){
            throw new RangeError('El Numero No es un Positivo')
        }
        // crea nodo
        const newNode = new Node(data)
        // crea una referencia circular(hacia si mismo)
        newNode.next = newNode
        // Cabeza y Cola apuntando al nuevo nodo
        this.head= newNode
        this.tail = newNode
        // Incremento de Length
        this.length++
    }
    append(data) {
        if(this.length === 0) {
            return this.init(data)
        }
        // crea un nuevo nodo
        const newNode = new Node(data)
        newNode.next = this.head
        // Apuntar esta cola al nuevo nodo
        this.tail.next = newNode
        // asignar la cola al nuevo nodo
        this.tail = newNode
        // incrementar length
        this.length++

    }
    size(){
        return this.length
    }
    getList() {
        const array = []
        let current = this.head
        if(this.head === null){
            
            return []
            
        }
        do {
            array.push(current.data)
            current = current.next

        }while(current !== this.head)
        return array
    }
    isCircular() {
        if(!this.head){
            return false
        }
        let current = this.head
        while (current.next !== this.head){
            current = current.next
        }
        return current.next === this.head
    }
}

