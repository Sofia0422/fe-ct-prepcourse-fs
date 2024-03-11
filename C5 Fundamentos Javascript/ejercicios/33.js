function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if(numero === 2) {
    return true;
  }
  if(numero === 3) {
    return true;
  }
  if(numero % 2 === 0) {
    return false;
  }else if(numero % 3 === 0) {
    return false;
  }else {
    return true;
  }

  //CON BUCLE FOR
  //Se comprueba si el número es menor o igual a 1. Si lo es, devuelve false, ya que 1 y cualquier número menor que 1 no son primos.
  /* if (numero <= 1) {
    return false;
  } 
  //Se itera sobre todos los números desde 2 hasta el número anterior al número que se está comprobando. Si el número se divide de manera exacta por cualquier número en este rango, la función devuelve false, ya que esto significa que el número no es primo. Si el bucle completa todas las iteraciones sin encontrar ningún divisor, el número es primo y la función devuelve true. 
 for (let i = 2; i < numero; i++) {// Comprobamos si el número es divisible por algún número menor que él mismo
    if (numero % i === 0) {
      return false;
    }else {
      return true; // Si no ha sido divisible por ningún número, es primo return true;
    }      
  }  */ 
  
}


module.exports = esNumeroPrimo;
