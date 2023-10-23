export function diffArray (arr1, arr2) {
  if (arr1 === undefined || arr2 === undefined) {
    throw new TypeError('No Son Numeros')
  }
  if (arr1 === null || arr2 === null) {
    throw new TypeError('No Son Numeros')
  }
  const newArr = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j])
    }
  }
  return newArr
}
