function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  const nuevoarray = [] ;
  for ( let i = 0 ; i < array.length ; i ++) {
    if ( array[i] > 10 ) {
      nuevoarray.push(array[i]) ;
    } else {
      return null ;
    }
  }
  return nuevoarray ;
}

module.exports = contarElementosMayoresA10;
