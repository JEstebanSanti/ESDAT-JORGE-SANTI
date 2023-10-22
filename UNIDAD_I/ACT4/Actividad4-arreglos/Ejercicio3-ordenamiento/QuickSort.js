export const quickSort = (arr, start, end) => {
  if (arr === undefined) {
    throw new TypeError('No Son Numeros')
  }
  if (arr === null) {
    throw new TypeError('No Son Numeros')
  }
  if (start < end) {
    // Puedes obtener información sobre cómo se deriva el valor de pivote en los comentarios a continuación
    const pivot = partition(arr, start, end)

    // Asegúrate de leer los comentarios a continuación para comprender por qué se usan pivote - 1 y pivote + 1
    // Estas son las llamadas recursivas a quickSort
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
  }
}

const partition = (arr, start, end) => {
  const pivot = end
  // Establece i en start - 1 para que puedas acceder al primer índice en caso de que el valor en arr[0] sea mayor que arr[pivot]
  // Los comentarios posteriores se expondrán sobre el comentario anterior
  let i = start - 1
  let j = start

  // Incrementa j hasta el índice que precede al pivote
  while (j < pivot) {
    // If the value is greater than the pivot increment j
    // Si el valor es mayor que el pivote incrementa j
    if (arr[j] > arr[pivot]) {
      j++
    }

    // Cuando el valor en arr[j] es menor que el pivote:
    // incrementa i (arr[i] será un valor mayor que arr[pivot]) e intercambia el valor en arr[i] y arr[j]
    else {
      i++
      swap(arr, j, i)
      j++
    }
  }

  // El valor de arr[i + 1] será mayor que el valor de arr[pivot]
  swap(arr, i + 1, pivot)

  // Devuelves i + 1, ya que los valores a la izquierda son menores que arr[i+1], y los valores a la derecha son mayores que arr[i + 1]
  // Como tal, cuando se llama a las ordenaciones rápidas recursivas, los nuevos subconjuntos no incluirán este valor de pivote utilizado anteriormente
  return i + 1
}

const swap = (arr, firstIndex, secondIndex) => {
  const temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}
