function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let nuevoarray = [] ;
  let arraySeparado ;
  for ( let i = 0 ; i < arrayOfStrings.length ; i ++) {
     arraySeparado = arrayOfStrings[i].charAt(0).toLowerCase() ;
    if (arraySeparado === 'a') {
     nuevoarray.push(arrayOfStrings[i]);
    }
  }
  return nuevoarray ;
}

module.exports = filter;
