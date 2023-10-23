export function colectarNieve (lista) {
  let total = 0
  let left = 0
  let right = lista.length - 1
  let maxLeft = lista[left]
  let maxRight = lista[right]

  while (left < right) {
    if (lista[left] < lista[right]) {
      if (lista[left] > maxLeft) {
        maxLeft = lista[left]
      } else {
        total += maxLeft - lista[left]
      }
      left++
    } else {
      if (lista[right] > maxRight) {
        maxRight = lista[right]
      } else {
        total += maxRight - lista[right]
      }
      right--
    }
  }

  return total
}
