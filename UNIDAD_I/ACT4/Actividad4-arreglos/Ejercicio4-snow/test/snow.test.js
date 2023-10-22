import { colectarNieve } from "../snow"

describe('Suit de pruebas para la funcion colectarNieve())', () => {
    beforeAll(() => {
      console.info('Author: Jorge Esteban Corral Santillan, EL YORSH')
    })
    test('Test #1 La funcion debe retornar 12 para el valor [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1]', () => { 
        let lista = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1]
        expect(colectarNieve(lista)).toEqual(12)
    })
})