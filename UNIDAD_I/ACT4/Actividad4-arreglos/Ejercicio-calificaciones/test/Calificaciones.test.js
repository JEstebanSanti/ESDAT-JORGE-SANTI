import {calcularPromedioAprobadosYreprobados} from '../Calificaciones'
describe('Suit de pruebas para la funcion calcularPromedioAprobadosYreprobados()', () => { 
    beforeAll(()=>{
        console.info("Author: Jorge Esteban Corral Santillan, EL YORSH")
    })

    test('Test #1: La prueba debe retornar {"promedio": 67, "aprobados": 3, "reprobados": 2} para el valor [80, 70, 55, 90, 40]', () => { 
        const resTest = JSON.parse(calcularPromedioAprobadosYreprobados([80, 70, 55, 90, 40]))
        const exp = {"promedio": 67, "reprobados": 2, "aprobados": 3}
        expect(resTest).toEqual(exp)
     })
     test('Test #2: El resultado debe contener propiedad y valor: promedio: 67, reprobados: 2 y aprobados: 3', () => {
        const resTest = JSON.parse(calcularPromedioAprobadosYreprobados([80, 70, 55, 90, 40]))
        expect(resTest).toHaveProperty('promedio', 67)
        expect(resTest).toHaveProperty('reprobados', 2)
        expect(resTest).toHaveProperty('aprobados', 3)

    });
    it('Test 3 - Lanzar error por entrada no válida', () => {
        expect(() => calcularPromedioAprobadosYreprobados(null)).toThrow("No Son Numeros")
        expect(() => calcularPromedioAprobadosYreprobados(undefined)).toThrow("No Son Numeros")
      })

 })
