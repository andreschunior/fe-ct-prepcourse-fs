function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let nuevoarray = [] ;
  for ( let i = 0 ; i < 10 ;  i ++) {
      num += 2 ;
      nuevoarray.push(num)

    if ( nuevoarray[nuevoarray.length -1] === i ) {
      return "Se interrumpió la ejecución"; 
      break ;
     
    }
  }
  return nuevoarray;
}


module.exports = breakStatement;
