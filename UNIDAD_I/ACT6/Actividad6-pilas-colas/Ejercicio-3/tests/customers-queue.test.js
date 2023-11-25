import { Queue } from "../customers-queue";

describe('Suit de pruebas para la simulacion de un customer service FIFO', () => { 
    beforeAll(()=> {
        console.log("Author JORGE ESTEBAN CORRAL SANTILLAN YORSH")
    })

    test('Test#1 Probueba si no hay ningun customer en la cola,inicializando la clase y usando el metodo isEmpty() debe retornar true', () => { 
        const customers = new Queue()

        expect(customers.isEmpty()).toBeTruthy()
    })
    test('Test#2 Prueba si hay almenos uno o mas customers en la cola,inicializando la clase y usando el metodo isEmpty() debe retornar False', () => { 
        const customers = new Queue()
        customers.enqueue("Jorge Esteban")
        expect(customers.isEmpty()).toBeFalsy()
    })
    test('Test#3 Prueba El total de customers en la cola,inicializando la clase, despues llenando la cola de con 5 clientes usando metodo enqueue() y usando el metodo size() debe retornar El valor de 4', () => { 
        const customers = new Queue()
        customers.enqueue("Jorge Esteban")
        customers.enqueue("Angel Dabnee")
        customers.enqueue("Ruben")
        customers.enqueue("Dan")
        expect(customers.size()).toBe(4)
    })
    test('Test#4 Prueba la funcionalidad de retorname el nombre del primero a atender,inicializando la clase, despues llenando la cola de con 5 clientes usando metodo enqueue() y usando el metodo peek() debe retornar El primer cliente que debe ser "Jorge Esteban', () => { 
        const customers = new Queue()
        customers.enqueue("Jorge Esteban")
        customers.enqueue("Angel Dabnee")
        customers.enqueue("Ruben")
        customers.enqueue("Dan")
        expect(customers.peek()).toBe("Jorge Esteban")
    })
    test('Test#4 Prueba la funcionalidad de despachar el nombre del primero a atender,inicializando la clase, despues llenando la cola de con 5 clientes usando metodo enqueue() y usando el metodo dequeue() debe retornar El primer cliente que debe ser "Jorge Esteban', () => { 
        const customers = new Queue()
        customers.enqueue("Jorge Esteban")
        customers.enqueue("Angel Dabnee")
        customers.enqueue("Ruben")
        customers.enqueue("Dan")
        expect(customers.dequeue()).toBe("Jorge Esteban")
    })
    test('Test#5 Prueba la funcionalidad de despachar a todos los clientes,inicializando la clase, despues llenando la cola de con 5 clientes usando metodo enqueue() y usando el metodo dequeue() en un loop debe retornar El nombre del cliente, hasta que la cola este vacia, Cuando quede vacia debe retornar True', () => { 
        const customers = new Queue()
        customers.enqueue("Jorge Esteban")
        customers.enqueue("Angel Dabnee")
        customers.enqueue("Ruben")
        customers.enqueue("Dan")
        const customersExpect = ["Jorge Esteban", "Angel Dabnee", "Ruben", "Dan"]
        let position = 0
        while(!customers.isEmpty()){
            const nextCustomer = customers.dequeue();
            expect(nextCustomer).toBe(customersExpect[position])
            position++
        }
        expect(customers.isEmpty()).toBeTruthy()
    })
 })