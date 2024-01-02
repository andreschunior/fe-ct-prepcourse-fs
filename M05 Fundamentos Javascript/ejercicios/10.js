function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  let date1 = new Date(fecha) ;
if (date1.toDateString() == 'Valid Date') {
  return true ;
} else {
  return false ; 
}

}


module.exports = esFechaValida;