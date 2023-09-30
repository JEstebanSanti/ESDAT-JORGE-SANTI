function floodFill(matrix, row, col, newColor, originalColor) {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      matrix[row][col] !== originalColor ||
      matrix[row][col] === newColor
    ) {
      return;
    }
  
    // Cambia el color actual
    matrix[row][col] = newColor;
  
    // Rellenar recursivamente en las direcciones adyacentes
    floodFill(matrix, row - 1, col, newColor, originalColor); // Arriba
    floodFill(matrix, row + 1, col, newColor, originalColor); // Abajo
    floodFill(matrix, row, col - 1, newColor, originalColor); // Izquierda
    floodFill(matrix, row, col + 1, newColor, originalColor); // Derecha
  }

export {floodFill}