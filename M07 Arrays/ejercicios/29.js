function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  
  let sumaEsperada; 
  let sumaReal = 0 ; 
  if (numeros.length === 0) {
    return null;
  }

 for ( let i = 0 ; i < numeros.length ; i ++) {
   
  sumaReal += numeros [i] ;
  sumaEsperada.push(numeros[i]) 
 }
  sumaEsperada = numeros.reduce((total, num) => total + num, 0);


  if (sumaEsperada - sumaReal === 0) return null;
  else return sumaEsperada;
}





module.exports = encontrarNumeroFaltante;