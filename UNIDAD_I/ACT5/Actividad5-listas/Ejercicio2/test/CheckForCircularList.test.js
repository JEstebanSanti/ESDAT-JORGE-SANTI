import { SinglyCircularLinkedList } from "../CheckForCircularList"
describe('Suit de Pruebas para LISTA ENLAZADA Y La funcion de Suma de dos listas enlazadas en reversa', () => {
    beforeAll(() => {
        console.log("Autor: JORGE ESTEBAN CORRAL SANTILLAN, YORSH El AUSENTE PACIENTE DEL VIEJO OESTE")
    })
    
    test('Test #1: Iniciando la Lista Sin Nungun valor y llamando el metodo getList() Retorna []', () => { 
        const myList = new SinglyCircularLinkedList()
        expect(myList.getList()).toStrictEqual([])
     })
    test('Test #2: Iniciando la Lista sin ningun valor, usando el metodo append con el valor 2 y usandolo nuevamente ahora con el valor de 9, despues obtener el array con el metodo get DEBE RETORNAR [2, 9]', () => { 
        const myList = new SinglyCircularLinkedList()
        myList.append(2)
        myList.append(9)
        

        expect(myList.getList()).toStrictEqual([2, 9])
    })
    test('Test #3 Iniciando la lista alimentando con el valor de  9, usar el metodo append alimentandolo con el valor de 101 y respectivamente usando el metodo isCircular DebeRetornar True', () => { 
        const myList = new SinglyCircularLinkedList(9)
        myList.append(101)
        expect(myList.isCircular()).toBeTruthy()
    })
    test('Test #: Lanza Errores por Entradas No validas', () => {
        const myList = new SinglyCircularLinkedList();
        expect(()=> myList.add(-2).toThrow(RangeError))
        expect(()=> myList.add(undefined).toThrow(RangeError))
        expect(()=> myList.add(null).toThrow(RangeError))
        expect(()=> myList.add(3.14).toThrow(RangeError))
        expect(()=> myList.add('Ajua Viejon').toThrow(RangeError))


    })
})