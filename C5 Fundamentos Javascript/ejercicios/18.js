function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(num % 2 === 1) {
    return true;
  }else {
    return false;
  }

  //Mejor
  //return num % 2 === 1 ? true : false;
}

module.exports = esImpar;