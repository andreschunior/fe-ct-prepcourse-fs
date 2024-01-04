function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  
 
  if (numeros.length === 0) {
    return null;
  }

  if (numeros[0] == (numeros[numeros.length - 1] - (numeros.length - 1)) ){
    return null ;
  }

  let sumaEsperada = numeros[0]; 
  let sumaReal = 0 ; 
  let primerNumero = numeros[0]   ;
  
 for ( let i = 0 ; i < numeros.length ; i ++) {
  //sumaEsperada = sumaEsperada + (primerNumero + 1) ;
  sumaEsperada = sumaEsperada +(primerNumero + i + 1) ;
  sumaReal += numeros[i];

  console.log('esperada ' + sumaEsperada);
  console.log('real ' + sumaReal) ; 

  
 }
  let diferencia = sumaEsperada - sumaReal ;
 
    return diferencia;

  }

encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ; 




module.exports = encontrarNumeroFaltante;