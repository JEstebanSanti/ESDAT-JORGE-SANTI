function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1; // El elemento no se encontró en el array
    }
  
    const middle = Math.floor((start + end) / 2);
  
    if (arr[middle] === target) {
      return middle; // Se encontró el elemento
    }
  
    if (arr[middle] > target) {
      return binarySearch(arr, target, start, middle - 1); // Buscar en la mitad izquierda
    } else {
      return binarySearch(arr, target, middle + 1, end); // Buscar en la mitad derecha
    }
  }

export {binarySearch}