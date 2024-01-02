function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const nuevoarray = [] ; 
  for ( let i = 0 ; i < array.length ; i ++) {
    if (array [i] % 2 === 0 ){
      nuevoarray.push(array[i]) ;
    }
  }
  return nuevoarray ;
}

module.exports = filtrarNumerosPares;
