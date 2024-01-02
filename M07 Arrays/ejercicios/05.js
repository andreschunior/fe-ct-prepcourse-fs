function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let nuevoarray = [] ;
for ( let i = 0 ; i < array.length ; i ++){
  if (array[i].length >= 5) {
  return nuevoarray.push(array[i]) ;
  }
}
return nuevoarray ; 
}

module.exports = obtenerPrimerStringLargo;
