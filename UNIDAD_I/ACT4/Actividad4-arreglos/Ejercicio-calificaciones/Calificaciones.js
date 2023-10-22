export function calcularPromedioAprobadosYreprobados (arr) {
  
  if(arr === undefined){
    throw new TypeError("No Son Numeros")
  }
  if(arr === null){
    throw new TypeError("No Son Numeros")
  }
  
  let sum = 0
  let aprovados = 0
  let reprobados = 0
  arr.forEach(element => {
    sum += element
    aprovados += (element >= 70) ? 1 : 0
    reprobados += (element < 70) ? 1 : 0
  })
  const promedio = sum / arr.length
  const reporte = {
    promedio,
    reprobados,
    aprobados: aprovados

  }
  const data = JSON.stringify(reporte)
  return data
}
