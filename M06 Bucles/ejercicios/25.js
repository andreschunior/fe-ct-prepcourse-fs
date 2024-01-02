function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

   const clean = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const  reverse = clean.split('').reverse().join('');
return clean === reverse ; 
}


module.exports = esPalindromo;
