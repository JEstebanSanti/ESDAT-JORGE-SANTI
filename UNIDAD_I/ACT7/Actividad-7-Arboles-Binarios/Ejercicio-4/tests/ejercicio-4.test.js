import { ArbolBinario } from "../ejercicio-4"
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
    test('Test #3 La instancia de la clase usando su metodo buscar con el valor de 6, despues de haber insertado los valores 7,6,5,3,0 debe devolver el valor de 6', () => { 
        const arbolBinario = new ArbolBinario()
        arbolBinario.insertar(7)
        arbolBinario.insertar(5)
        arbolBinario.insertar(6)

        const exp = {
            derecha : null,
            izquierda : null,
            valor: 6,
        }
        expect(arbolBinario.buscar(6)).toEqual(exp)
            
    })
    test('Test #4 Probando el metodo eliminar. insertando los valores anteriores debe retornar un nodo', ()=>{
        const arbolBinario = new ArbolBinario()
        arbolBinario.insertar(7)
        arbolBinario.insertar(6)
        arbolBinario.insertar(5)
        arbolBinario.insertar(4)
        arbolBinario.insertar(0)
        expect(arbolBinario.eliminar(6)).toBeUndefined()
    })
    test('Test #5 Probando el metodo mover. insertando los valores anteriores debe retornar un nodo', ()=>{
        const arbolBinario = new ArbolBinario()
        arbolBinario.insertar(17)
        arbolBinario.insertar(6)
        arbolBinario.insertar(26)
       
        arbolBinario.moverNodo(17,26)
        expect(arbolBinario.raiz.valor).toBe(26)
    })
    
    test('Test que prueba valores de entrada no valida para el metodo insertar()', () => { 
        const arbolBinario = new ArbolBinario()
        expect(()=>arbolBinario.insertar(3.1415).toThrow(TypeError))
        expect(()=>arbolBinario.insertar('hola').toThrow(TypeError))
        expect(()=>arbolBinario.insertar().toThrow(TypeError))

     })
 })
