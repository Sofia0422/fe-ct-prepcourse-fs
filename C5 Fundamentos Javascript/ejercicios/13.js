function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:

  if( x === y) {
    return true;
  }else {
    return false;
  }

  //Mejor
  //return x === y ? true : false
}

module.exports = sonIguales;