function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let pares = [] ;
  for ( let i = 0 ; i < numeros.length ; i++){
    if (numeros.length === 0) {
      return 0 ; 
    }
    if ( numeros [i] % 2 === 0) {
      pares.push(numeros) ;
    } else {
      continue ;
    }
  }

  return pares.length ; 
}

module.exports = contarParesConContinue;
