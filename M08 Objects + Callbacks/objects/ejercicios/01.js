const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  return objeto.hasOwnProperty(propiedad) ? objeto[propiedad] : undefined;
}

module.exports = obtenerValorPropiedad;
