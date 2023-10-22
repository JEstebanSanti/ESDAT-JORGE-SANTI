import { quickSort } from '../QuickSort'
describe('Suit de pruebas para la quickSort()', () => {
  beforeAll(() => {
    console.info('Author: Jorge Esteban Corral Santillan, EL YORSH')
  })
  test('Test #1 debe devolver el arreglo orde nado de menor a mayor de [6, 2, 5, 3, 8, 7, 1, 4]', () => {
    const arr = [6, 2, 5, 3, 8, 7, 1, 4]
    const expTest = [1, 2, 3, 4, 5, 6, 7, 8]
    quickSort(arr, 0, arr.length - 1)
    expect(arr).toEqual(expTest)
  })
  test('Test #2 - Lanzar error por entrada no válida', () => {
    expect(() => quickSort(null)).toThrow('No Son Numeros')
    expect(() => quickSort(undefined)).toThrow('No Son Numeros')
  })
  test('Test #3 debe devolver el arreglo orde nado de menor a mayor de [100, 600, 700, 33, 1, 1, 1, 5]', () => {
    const arr = [100, 600, 700, 33, 1, 1, 1, 5]
    const expTest = [1, 1, 1, 5, 33, 100, 600, 700]
    quickSort(arr, 0, arr.length - 1)
    expect(arr).toEqual(expTest)
  })
})
