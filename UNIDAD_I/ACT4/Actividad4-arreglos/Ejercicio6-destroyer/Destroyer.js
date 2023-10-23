export function SeekAndDestroy (arr) {
  const survivers = []
  const elementToDestroy = Object.values(arguments).splice(1)
  const battleField = Object.values(arguments)[0]
  battleField.forEach(position => {
    if (elementToDestroy.indexOf(position) === -1) {
      survivers.push(position)
    }
  })
  return survivers
}
