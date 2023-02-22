//Definimos el objeto con atributos y metodos
const persona = {
  nombre: "Juan",
  edad: 30,
  apellido: "Pérez",
  estado: true,

  saludar() {
    console.log("Hola soy:" + this.nombre);
  },
  
  mostratEstado() {
    if (this.estado == true) {
      console.log("ACTIVO");
    } else {
      console.log("INACTIVO");
    }
  },

  nombreCompleto() {
    console.log(`El nombre es: ${this.nombre} ${this.apellido}`)
    //console.log(this.nombre + "  " + this.apellido);
  },
};
//console.log(persona.edad + persona.nombre);
//console.log(persona.saludar());
console.log(persona.mostratEstado());
console.log(persona.nombreCompleto());
