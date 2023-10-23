import { SeekAndDestroy } from '../Destroyer'
describe('Suit de pruebas para la funcion SeekAndDestroy', () => {
  beforeAll(() => {
    console.info('Author: Jorge Esteban Corral Santillan, EL YORSH')
  })
  test('Test #1 debe retornar 11 para los valores [1, 2, 3, 1, 2, 3], 2, 3', () => {
    expect([1, 1]).toEqual(SeekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3))
  })
  test('Test #2 debe retornar [] para los valores [2, 3, 2, 3], 2, 3)]', () => {
    expect([]).toEqual(SeekAndDestroy([2, 3, 2, 3], 2, 3))
  })
  test('Test #3 debe retornar ["hamburger"] para los valores ["tree", "hamburger", 53], "tree", 53', () => {
    expect(['hamburger']).toEqual(SeekAndDestroy(['tree', 'hamburger', 53], 'tree', 53))
  })
})
