import { letterCombinations } from '../LetterCombinations'

describe('Suite de pruebas de la funcion letterCombinations() usando recursividad', () => {

  beforeAll(() => {
    console.info('Autor: Hecho por Jorge Esteban Corral Santillan');
  })

  it('Test 1 - debe retornar "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf" para el 23', () => {
    
    expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });

  it('Test 2 - debe retornar "p", "q", "r", "s" para el 7', () => {
   
    expect(letterCombinations("7")).toEqual(["p", "q", "r", "s"]);
  });

  
})
