function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:

  if(num > 50) {
    return true;
  }else {
    return false;
  }

  //Mejor
  //return num > 50 ? true : false;
}

module.exports = mayorQueCincuenta;
