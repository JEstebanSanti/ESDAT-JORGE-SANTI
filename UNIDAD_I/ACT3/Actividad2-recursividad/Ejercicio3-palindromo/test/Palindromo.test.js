import { palindromo } from '../Palindromo'

describe('Suite de pruebas de la funcion lettersCombination() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Jorge Esteban Corral Santillan');
  })

  it('Test 1 - para el valor de oso debe retornar true', () => {
    expect(palindromo('oso')).toBe(true);
  })

  it('Test 2 - debe retornar true para el valor de recomocer', () => {
    expect(palindromo('reconocer')).toBe(true);
  })

  it('Test 3 - debe retornar false para el valo de hola', () => {
    expect(palindromo('hola')).toBe(false);
  })
})
