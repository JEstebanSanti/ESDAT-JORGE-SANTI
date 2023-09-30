import { fibonacci } from '../Fibonacci'

describe('Suite de pruebas de la funcion lettersCombination() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Jorge Esteban Corral Santillan');
  })

  it('Test 1 - debe retornar 0 para el valor 0', () => {
    expect(fibonacci(0)).toBe(0);
  })

  it('Test 2 - debe retornar 1 para el valor 1', () => {
    expect(fibonacci(1)).toBe(1);
  })

  it('Test 3 debe retornar 55 para el valor de 10', () => {
    expect(fibonacci(10)).toBe(55);
  })
})
