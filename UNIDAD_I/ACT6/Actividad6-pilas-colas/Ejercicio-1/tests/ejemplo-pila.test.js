import { isPolyfillSource } from "@babel/preset-env/lib/polyfills/utils"
import { Stack } from "../Ejemplo-pila"
describe('Suit de pruebas para la clase Stack y Sus metodos', () => { 
    beforeAll(()=>{
        console.log("Autor: Jorge Esteban Corral Santillan El YORSH")
    })
    test('Inicializando Stack y usando el metodo peek Deberia Retornar [] ', () => { 
        const pila = new Stack();
        expect(pila.peek()).toStrictEqual([])
    })
    test('Inicializando Stack y usando el metodo push con el valor 24. Probando el metodo peek Deberia Retornar [24] ', () => { 
        const pila = new Stack();
        pila.push(24)
        expect(pila.peek()).toStrictEqual(24)
    })
    test('Inicializando Stack y usando el metodo push con el valor 24, "la neta si me devolvi". Probando el metodo peek Deberia Retornar [24, "La neta si me devolvi"] ', () => { 
        const pila = new Stack();
        pila.push(24)
        pila.push("la neta si me devolvi")
        expect(pila.peek()).toBe("la neta si me devolvi")
    })
    test('Inicializando Stack y usando el metodo push con el valor 14, "la neta si me devolvi".. Probando el metodo pop, Deberia Retornar [14] ', () => { 
        const pila = new Stack();
        pila.push("la neta si me devolvi")
        pila.push(14)
        expect(pila.pop()).toBe(14)
    })
    test('Inicializando Stack para probar metodo size el size, usando el metodo push 3 veces con los valores, 1,2 y 3 Deberia retornar un 3', () => { 
        const pila = new Stack();
        pila.push(1)
        pila.push(2)
        pila.push(3)
        expect(pila.size()).toStrictEqual(3)
    })
    test('Inicializando Stack para probar metodo isEmpty, usando el metodo push 3 veces con los valores, 1,2 y 3 Deberia retornar un False', () => { 
        const pila = new Stack();
        pila.push(1)
        pila.push(2)
        pila.push(3)
        expect(pila.isEmpty()).toBeFalsy()
    })
    test('Inicializando Stack para probar metodo isEmpty, sin usar metodo push, Deberia retornar True ', () => { 
        const pila = new Stack();
        expect(pila.isEmpty()).toBeTruthy()
    })

 })