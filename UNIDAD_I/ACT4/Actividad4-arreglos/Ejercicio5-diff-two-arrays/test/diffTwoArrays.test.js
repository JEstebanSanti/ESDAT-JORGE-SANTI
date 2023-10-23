import { diffArray } from '../diffTwoArrays'
describe('Suit de pruebas para la funcion diffArray', () => {
  beforeAll(() => {
    console.info('Author: Jorge Esteban Corral Santillan, EL YORSH')
  })
  test('Test #1 debe retornar 4 para los valores [1, 2, 3, 5], [1, 2, 3, 4, 5]', () => {
    expect([4]).toEqual(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
  })
  test('Test #2 debe retornar "pink wool" para los valores ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]', () => {
    expect(['pink wool']).toEqual(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']))
  })
  it('Test 3 - Lanzar error por entrada no válida', () => {
    expect(() => diffArray(null, null)).toThrow('No Son Numeros')
    expect(() => diffArray(undefined, undefined)).toThrow('No Son Numeros')
  })
})
