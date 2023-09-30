import { floodFill } from '../FloodFill'

describe('Suite de pruebas de la funcion floodfill() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Jorge Esteban Corral Santillan');
  })

  it('Test 1 - debe retornar [[2, 2, 2],[2, 2, 0],[2, 0, 1] para la matriz [[1, 1, 1],[1, 1, 0],[1, 0, 1],] en la posicion 1,1 con el color 2', () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
  
    // Realizar un relleno desde la posición (1, 1) con el color 2
    floodFill(matrix, 1, 1, 2, 1);
  
    const expectedMatrix = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    expect(matrix).toEqual(expectedMatrix);
  });

  it('Test 2 - debe retornar [[2,2,2], [2,2,0],[2,0,1]] la misma matriz [[1, 1, 1],[1, 1, 0],[1, 0, 1],]', () => {
    const matrix = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];

    floodFill(matrix, 0, 0, 2, 1);
  
    const expectedMatrix = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
  
    expect(matrix).toEqual(expectedMatrix);
  });
   
 
})
