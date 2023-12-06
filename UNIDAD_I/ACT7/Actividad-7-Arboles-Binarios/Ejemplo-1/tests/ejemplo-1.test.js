import { ArbolBinario } from "../ejemplo-1"
describe('Suit De Prubas Para La clase ArbolBinario y sus funcionalidades', () => { 
    beforeAll(()=>{
        console.log("Author Jorge Esteban Corral Santillan")
    })
    test('Test #1 al declarar un nuevo arbol binario este debe ser una instancia de la clase ArbolBinario', () => { 
        const arbolBinario = new ArbolBinario()
        expect(arbolBinario).toBeInstanceOf(ArbolBinario)
    })
    test('Test #2 La clase se instancia, usando su metodo insertar con el valor de 1 que debe retornar true', () => { 
        const arbolBinario = new ArbolBinario()
        expect(arbolBinario.insertar(1)).toBeTruthy()
    })
    test('Test que prueba valores de entrada no valida para el metodo insertar()', () => { 
        const arbolBinario = new ArbolBinario()
        expect(()=>arbolBinario.insertar(3.1415).toThrow(TypeError))
        expect(()=>arbolBinario.insertar('hola').toThrow(TypeError))
        expect(()=>arbolBinario.insertar().toThrow(TypeError))

     })
 })