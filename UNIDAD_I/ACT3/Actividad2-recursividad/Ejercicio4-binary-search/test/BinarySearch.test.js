import { binarySearch } from '../BinarySeach'

describe('Suite de pruebas de la funcion lettersCombination() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Jorge Esteban Corral Santillan');
  })

  it('Test 1 - debe retornar 4 para el valores 5 de el set de valores [1, 2, 3, 4, 5, 6, 7, 8, 9] se encuentra al lado izquierdo', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5 )).toBe(4);
  })

  it('Test 2 - debe retornar 0 para el valor 1 del seet de valores [1, 2, 3, 4, 5, 6, 7, 8, 9] se encuentra en el lado izquierdo', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(0);
  })

  it('Test 3 - debe retornar 6 para el valor 74 y set de valores [13, 24, 35, 64, 55, 56, 74, 87, 95] se encuentra al lado derecho ', () => {
    expect(binarySearch([13, 24, 35, 64, 55, 56, 74, 87, 95], 74)).toBe(6);
  })
})
