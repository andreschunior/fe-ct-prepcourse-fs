// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = { 
    propiedad1: 'nombre',
    propiedad2: 'edad',
    propiedad3: {
        propiedad4: 'ocupacion',
        propiedad5: 'direccion',
        propiedad6: {
            propiedad7: 'hobbies',
            propiedad8: {
                propiedad9: 'valor7'
            }
        }
    },
    obtenerPropiedadAnidada: function() {
        return this.propiedad3.propiedad6.propiedad8.propiedad9;
    }
};
this.propiedad1 ;

module.exports = objetoAnidado;
