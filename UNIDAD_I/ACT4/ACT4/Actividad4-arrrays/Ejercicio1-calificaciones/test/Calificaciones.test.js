import { calcularPromedio } from "../../Calificaciones";

describe("Suit De Pruebas Para Calificaciones", ()=> {
    test('El test debe regresar un valorr de tipo numerico de flotante o doble',()=>{
        const promedio = calcularPromedio([2,4,6,7,10,10])
        expect(typeof saludoTest).toBe("number")
    })
})