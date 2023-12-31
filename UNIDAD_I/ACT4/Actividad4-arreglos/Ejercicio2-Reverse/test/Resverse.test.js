import { reverseArray } from '../Revserse'
describe('Suit de pruebas para la reverseArray()', () => {
  beforeAll(() => {
    console.info('Author: Jorge Esteban Corral Santillan, EL YORSH')
  })

  test('Test #1: El resultado de la la funcion debe devolver [1,2,3,4] para el valor de [4,3,2,1] ', () => {
    const reverseTest = reverseArray([4, 3, 2, 1])
    const expRes = [1, 2, 3, 4]
    expect(reverseTest).toEqual(expRes)
  })
  test('Test #1: El resultado de la la funcion debe devolver [11, true, 34, false] para el valor de [false, 34, true, 11] ', () => {
    const reverseTest = reverseArray([false, 34, true, 11])
    const expRes = [11, true, 34, false]
    expect(reverseTest).toEqual(expRes)
  })
  test('Test #1: El resultado de la la funcion debe devolver [27, "Edad", "Esteban", "Jorge"] para el valor de ["Jorge", "Esteban", "Edad", 27] ', () => {
    const reverseTest = reverseArray(['Jorge', 'Esteban', 'Edad', 27])
    const expRes = [27, 'Edad', 'Esteban', 'Jorge']
    expect(reverseTest).toEqual(expRes)
  })
  it('Test 3 - Lanzar error por entrada no válida', () => {
    expect(() => reverseArray(null)).toThrow('No Son Numeros')
    expect(() => reverseArray(undefined)).toThrow('No Son Numeros')
  })
})
