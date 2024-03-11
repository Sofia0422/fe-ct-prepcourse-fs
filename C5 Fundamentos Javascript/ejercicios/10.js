function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    if (fecha.toString() === 'Invalid Date'){ //se deduce ya que al hacer console.log(fecha) se ve un string Invalid Date.
      return false;
    }
    if (fecha instanceof Date) { //operador instanceof para saber si la variable se creo a partir de o es una instancia del objeto Date
    return true;    
  }    
  else {
    return false;
  }  
}

module.exports = esFechaValida;