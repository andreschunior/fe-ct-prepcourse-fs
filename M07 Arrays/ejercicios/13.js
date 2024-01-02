function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  notas = 0 ;
  total = 0 ;
  for ( let i = 0 ; i < resultadosTest.length ; i ++) {
    notas += resultadosTest[i] ;
  }
  total = notas / resultadosTest.length ; 
  return total ; 
}

module.exports = promedioResultadosTest;
