import { SimpleLinkedList, Node } from "../LinkedList";
describe('Suit de Pruebas para LISTA ENLAZADA', () => {
    beforeAll(() => {
        console.log("Autor: JORGE ESTEBAN CORRAL SANTILLAN, YORSH")
    })
    
   test('Test #1 La lista Inicializada sin ningun valor inicial debe retornar una lista vacia', () => { 
    const myList = new SimpleLinkedList()
    expect(myList.getList()).toStrictEqual([])
    })

    test('Test#2 La lista inicializada con el valor de nodo1 ya inicializado con el valor de 666 al usar el metodo getList() debe retornar [666], ', () => { 
        const nodo1 = new Node(666)
        const myList = new SimpleLinkedList(nodo1)
        expect(myList.getList()).toStrictEqual([666])
     })
    test('Test 3: Lanza Errores por Entradas No validas', () => {
        
        expect(()=> new Node(null).toThrow('El valor introducido No es Valido'))
        expect(()=> new Node(undefined).toThrow('El valor introducido No es Valido'))
    })
})