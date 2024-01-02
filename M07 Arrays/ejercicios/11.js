function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevoarray = []
  for ( let i = 0 ; i < array.length ; i ++) {
    nuevoarray.push(array[i] * i) ;
  }
  return nuevoarray ; 
}

module.exports = multiplicarElementosPorIndice;
