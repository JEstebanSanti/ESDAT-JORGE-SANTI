import { DoublyLinkedList } from "../DoubleLinkedList"
describe('Suit de Pruebas para LISTA DOBLEMENTE ENLAZADA', () => {
    beforeAll(() => {
        console.log("Autor: JORGE ESTEBAN CORRAL SANTILLAN, YORSH")
    })

    test('Test #1 La lista Inicializada sin ningun valor inicial debe retornar una lista vacia', () => {
        const myList = new DoublyLinkedList()
        expect(myList.getList()).toStrictEqual([])
    })

    test('Test#2: La Lista Inicializada usando metodo append dando los valores [5, 7, 9] ', () => {
        const myList = new DoublyLinkedList()
        myList.append(5)
        myList.append(7)
        myList.append(9)
        expect(myList.getList()).toStrictEqual([5, 7, 9])
    })
    test('Test#3: La Lista Inicializada usando metodo append dando los valores [5, 7, 9] Y usando el metodo Reverse debe de reasignarse Inversamente Retornando al usar el metodo getList [9,7,5] ', () => {
        const myList = new DoublyLinkedList()
        myList.append(5)
        myList.append(7)
        myList.append(9)
        myList.reverse();
        expect(myList.getList()).toStrictEqual([9, 7,5])
    })
    test('Test #4: Lanza Errores por Entradas No validas', () => {
        const myList1 = new DoublyLinkedList()
        const myList2 = new DoublyLinkedList()

        expect(()=> myList1.add(null).toThrow(TypeError))
        expect(()=> myList2.add(undefined).toThrow(TypeError))

    })
})