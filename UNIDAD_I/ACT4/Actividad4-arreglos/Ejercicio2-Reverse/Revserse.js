/**
 * @function reverse
 * @description  This function will accept an array and Reverse its elements and returns the inverted array
 * @param {Array} arr array with elements of any data type
 * @returns {Array} array with inverted elements
 * @see [Reverse](https://www.geeksforgeeks.org/write-a-program-to-Reverse-an-array-or-string/)
 */

export function reverseArray (arr) {
  if (arr === undefined) {
    throw new TypeError('No Son Numeros')
  }
  if (arr === null) {
    throw new TypeError('No Son Numeros')
  }
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i])
  }
  return newArray
}
