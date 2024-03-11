function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  let añoNacimiento = fechaNacimiento.getFullYear(); //variable para para obtener el año de la fecha de nacimiento

  let añoActual = new Date().getFullYear(); //variable para obtener el año actual

  if (añoActual - añoNacimiento >= 18) { //se resta el año actual y el año de la fecha de nacimiento para saber la edad actual y se compara con >= a 18 para saber si es mayor de edad
    return true;
  }
  else{
    return false;
  }
}

module.exports = esMayorDeEdad;