import { addTwoList, LinkedList } from '../AgregarDosNumeros';
describe('Suit de Pruebas para LISTA ENLAZADA Y La funcion de Suma de dos listas enlazadas en reversa', () => {
    beforeAll(() => {
        console.log("Autor: JORGE ESTEBAN CORRAL SANTILLAN, YORSH El AUSENTE PACIENTE DEL VIEJO OESTE")
    })
    test('Test #1: Invocando la lista Sin Alimentar con el metodo ADD DEBE Retornar una Lista Vacia []', () => {
        const myList = new LinkedList();
        const res = myList.getList();
        const expectedValue = [];
        expect(res).toEqual(expectedValue);
    })
    test("Test #2: Invocando la lista y usando el metodo ADD Alimentando con un numero 5 Debe Retornar [5]", () => {
        const myList = new LinkedList();
        myList.add(5)
        const res = myList.getList();
        const expectedValue = [5];
        expect(res).toEqual(expectedValue);
    })
    test("Test #3:  Invocando la lista y usando el metodo ADD Alimentando con un numero 5, 6 y 7 debe retornar los valores 5, 6 y 7 respectivamente", () => {
        const myList = new LinkedList();
        myList.add(5)
        myList.add(6)
        myList.add(7)
        const res = myList.getList();
        const expectedValue = [5, 6, 7];
        expect(res).toStrictEqual(expectedValue);
    })

    test('Test #4: Invocando la lista, Alimentarlo con el valor de 0, despues 5, Llamar el metodo reverse Debe retornar [5, 0]', () => {
        const myList = new LinkedList();
        myList.add(0)
        myList.add(5)
        myList.getList();
        myList.reverse();
        const exp = [5, 0]
        expect(myList.getList()).toStrictEqual(exp);

    })
    test('Test #5: Invocando dos listas, alimentando la primera Con Valores 0, 0, 5, alimentando la segunda lista con valores 0,0,5, llamar el metodo getList(), Despues el metodo reverse() y getList() para obtener la Reverse ,repitiendo lo mismo con la segunda lista, por ultimo llamar la  funcion AddTwoList() alimentandola con las dos listas anteriores debe retornar 1000', () => {
        const myListFirst = new LinkedList();
        myListFirst.add(0)
        myListFirst.add(0)
        myListFirst.add(5)
        myListFirst.getList();
        myListFirst.reverse();


        const myListSecond = new LinkedList()
        myListSecond.add(0)
        myListSecond.add(0)
        myListSecond.add(5)
        myListSecond.getList();
        myListSecond.reverse();

        const res = addTwoList(myListFirst.getList(), myListSecond.getList())

        expect(res).toStrictEqual(1000)

    })

    test('Test #6: Lanza Errores por Entradas No validas', () => {
        const myList = new LinkedList();
        //myList.add(undefined)
        //myList.add('siuuu')
        //myList.add(2.5)
        //myList.add(-1)


        expect(()=> myList.add(-2).toThrow(RangeError))
        expect(()=> myList.add(undefined).toThrow(RangeError))
        expect(()=> myList.add(null).toThrow(RangeError))
        expect(()=> myList.add(3.14).toThrow(RangeError))
        expect(()=> myList.add('Ajua Viejon').toThrow(RangeError))


    })
})