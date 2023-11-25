import { Queue } from "../Ejemplo-2";
describe('Suit Para las Pruebas de los metodos de la clase Queue', () => { 
    beforeAll(()=>{
        console.log("Autor: Jorge Esteban Corral Santillan YOSH")
    })
    test('Test #1: Esta prueba el metodo isEmty() de la clase, Cuando solo se instacia debe retornar un string con la leyenda "La cola está vacía", ', () => { 
        const cola = new Queue()
        expect(cola.peek()).toBeTruthy()
    })
    test('Test #2: Esta prueba el metodo enqueue de la clase, Usando metodo enqueue con el valor 6, Usando el metodo propio de la clase isEmpty() debe retornar Falso', () => { 
        const cola = new Queue()
        cola.enqueue(6)
        expect(cola.isEmpty()).toBeFalsy()
    })
    test('Test #3: Esta prueba el metodo peek de la clase, Usando metodo enqueue con el valor 6 y despues con el valor de 10, Usando el metodo propio de la clase peek() debe retornar 6', () => { 
        const cola = new Queue()
        cola.enqueue(6)
        cola.enqueue(10)
        expect(cola.peek()).toBe(6)
    })
    test('Test #3: Esta prueba el metodo dequeue de la clase, Usando metodo enqueue con el valor 6 y despues con el valor de 10, Usando el metodo dequeu() debe retornar 10', () => { 
        const cola = new Queue()
        cola.enqueue(6)
        cola.enqueue(10)
        expect(cola.dequeue()).toBe(6)
    })
    test('Test #3: Esta prueba el metodo size de la clase, Usando metodo enqueue con el valor 6 y despues con el valor de 10, Usando el metodo size() debe retornar 2', () => { 
        const cola = new Queue()
        cola.enqueue(6)
        cola.enqueue(10)
        expect(cola.size()).toBe(2)
    })
 })