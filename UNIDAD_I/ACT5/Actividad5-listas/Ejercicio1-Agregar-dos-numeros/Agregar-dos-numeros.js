class Nodo {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    // Metodo para Agregar un Nodo al final de la lista
    display(){
        let current = this.head
        while(current){

            console.log(current.data)
            current = current.next
        }
    }
    reverse() {
        let previous = null;
        let current = this.head;
        while (current !== null) {
          const next = current.next;
          current.next = previous;
          previous = current;
          current = next;
        }
        this.head = previous;
    }
    
}


class AddTwo{
    constructor(list1, list2){

    }
}

let nodo1 = new Nodo(2)
let nodo2 = new Nodo(5)
let nodo3 = new Nodo(10)
nodo1.next = nodo2
nodo2.next = nodo3

let lista = new LinkedList(nodo1)

let nodoUno = new Nodo(1)
let nodoDos = new Nodo(9)
let nodoTres = new Nodo(1)


//lista 2
nodoUno.next = nodoDos
nodoDos.next = nodoTres
let lista2 = new LinkedList(nodoUno)


lista2.display();
lista.display();
console.log("--------------")
lista.Reverse();