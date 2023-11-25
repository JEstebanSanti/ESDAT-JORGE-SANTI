import { Stack } from "../platos-pila";

describe('Suit de pruebas para la simulacion de un customer service FIFO', () => { 
    beforeAll(()=> {
        console.log("Author JORGE ESTEBAN CORRAL SANTILLAN YORSH")
    })

    test('Test#1 Cuando se inicializa el stack sin ningun plato, La prueba de isEmpty() Debe retornar True ', () => { 
        const platos = new Stack()
        expect(platos.isEmpty()).toBeTruthy()
    })
    test('Test#2 Cuando se inicializa el stack de platos, usando push se almacena almenos 1 plato o mas platos, La prueba de isEmpty() Debe retornar False ', () => { 
        const platos = new Stack()
        platos.push("platillo-1")
        expect(platos.isEmpty()).toBeFalsy()
    })
    test('Test#3 Cuando se inicializa el stack , Se almacenan un stack de 5 platos con el metodo push, probando la funcion clear debe limpiar todo el stack retornando "El total de platos lavados:5, total sucios:0" Esto representaria el estado inicial del stack los lavados y ls sucios el estado final', () => { 
        const platos = new Stack()
        platos.push("platillo-1")
        platos.push("platillo-2")
        platos.push("platillo-3")
        platos.push("platillo-4")
        platos.push("platillo-5")

        expect(platos.clear()).toBe("El total de platos lavados:5, total sucios:0")
    })


 })