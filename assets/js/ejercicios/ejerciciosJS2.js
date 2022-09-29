

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x >= y ? x : y

}
console.assert(obtenerMayor(10,10) === 10, "obtenerMayor_a01" )
console.assert(obtenerMayor(101,10) === 101, "obtenerMayor_a02" )
console.assert(obtenerMayor(-101,10) === 10, "obtenerMayor_a03" )


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? "Allowed" : "Not allowed"
}

console.assert(mayoriaDeEdad(18) === "Allowed", "mayoriaDeEdad_a01")
console.assert(mayoriaDeEdad(101) === "Allowed", "mayoriaDeEdad_a02")
console.assert(mayoriaDeEdad(17) === "Not allowed", "mayoriaDeEdad_a03")


  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline"

}

console.assert(conection(1) === "Online", "conection_a01")
console.assert(conection(2) === "Away", "conection_a02")
console.assert(conection(17) === "Offline", "conection_a03")
console.assert(conection(-1) === "Offline", "conection_a04")


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch (idioma) {
    case 'aleman':
      return "Guten Tag!"
      break
    case 'mandarin':
      return "Ni Hao!"
      break
    case 'ingles':
      return "Hello!"
      break
    default:
      return "Hola!"
  }
}
console.assert(saludo('aleman') === "Guten Tag!", "saludo_a01")
console.assert(saludo('mandarin') === "Ni Hao!", "saludo_a02")
console.assert(saludo('ingles') === "Hello!", "saludo_a03")
console.assert(saludo('español') === "Hola!", "saludo_a04")
console.assert(saludo('italiano') === "Hola!", "saludo_a05")
console.assert(saludo() === "Hola!", "saludo_a06")

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'blue':
      return "This is blue"
      break
    case 'red':
      return "This is red"
      break
    case 'green':
      return "This is green"
      break
    case 'orange':
      return "This is orange"
      break
    default:
      return "Color not found"
  }

}
console.assert(colors('blue') === "This is blue", "colors_a01")
console.assert(colors('red') === "This is red", "colors_a02")
console.assert(colors('green') === "This is green", "colors_a03")
console.assert(colors('orange') === "This is orange", "colors_a04")
console.assert(colors('italiano') === "Color not found", "colors_a05")
console.assert(colors() === "Color not found", "colors_a06")

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero === 5 || numero === 10
}

console.assert(esDiezOCinco(10) === true, "esDiezOCinco_a01")
console.assert(esDiezOCinco(5) === true, "esDiezOCinco_a02")
console.assert(esDiezOCinco(-5) === false, "esDiezOCinco_a03")
console.assert(esDiezOCinco(-10) === false, "esDiezOCinco_a04")
console.assert(esDiezOCinco(11) === false, "esDiezOCinco_a05")

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero > 20 && numero < 50
}
console.assert(estaEnRango(20) === false, "estaEnRango_a01")
console.assert(estaEnRango(21) === true, "estaEnRango_a02")
console.assert(estaEnRango(35) === true, "estaEnRango_a03")
console.assert(estaEnRango(49) === true, "estaEnRango_a04")
console.assert(estaEnRango(50) === false, "estaEnRango_a05")
console.assert(estaEnRango(89) === false, "estaEnRango_a06")
console.assert(estaEnRango(15) === false, "estaEnRango_a07")


function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero === Math.floor(numero)
}

console.assert(esEntero(0) === true, "esEntero_a01")
console.assert(esEntero(0.8) === false, "esEntero_a02")
console.assert(esEntero(1) === true, "esEntero_a03")
console.assert(esEntero(-10) === true, "esEntero_a04")
console.assert(esEntero(0.1) === false, "esEntero_a05")
console.assert(esEntero(-4.5) === false, "esEntero_a06")
console.assert(esEntero(Math.PI) === false, "esEntero_a07")

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if ( numero % 3 !== 0 &&  numero % 5 !== 0){
    return numero
  } 
  let response = numero % 3 === 0 ? "fizz" : ''
  response += numero % 5 === 0 ? "buzz" : ''
  return response
}

console.assert(fizzBuzz(9) === "fizz", "fizzBuzz_01")
console.assert(fizzBuzz(25) === "buzz", "fizzBuzz_02")
console.assert(fizzBuzz(15) === "fizzbuzz", "fizzBuzz_03")
console.assert(fizzBuzz(16) === 16, "fizzBuzz_04")
console.assert(fizzBuzz(-9) === "fizz", "fizzBuzz_05")
console.assert(fizzBuzz(-25) === "buzz", "fizzBuzz_06")
console.assert(fizzBuzz(-15) === "fizzbuzz", "fizzBuzz_07")
console.assert(fizzBuzz(-16) === -16, "fizzBuzz_08")

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  // Busco Negativos
  if ( (Math.abs(num1) + Math.abs(num2) + Math.abs(num3)) > num1 + num2 + num3 ){
    return "Hay negativos"
  }

  if ( num1 === 0 || num2 === 0 || num3 === 0 ){
    return "Error"
  }

  if (num1 > num2 && num1 > num3){
    return "Número 1 es mayor y positivo"
  }

  if (num3 > num2 && num3 > num1){
    return num3 + 1
  }

  return false
}

console.assert(operadoresLogicos(3,2,1) === "Número 1 es mayor y positivo", "operadoresLogicos_a01")
console.assert(operadoresLogicos(3,2,-1) === "Hay negativos", "operadoresLogicos_a02")
console.assert(operadoresLogicos(-4,-5,-1) === "Hay negativos", "operadoresLogicos_a03")
console.assert(operadoresLogicos(-1,5,1) === "Hay negativos", "operadoresLogicos_a04")
console.assert(operadoresLogicos(4,-5,1) === "Hay negativos", "operadoresLogicos_a05")
console.assert(operadoresLogicos(1,2,3) === 4, "operadoresLogicos_a06")
console.assert(operadoresLogicos(0,2,3) === "Error", "operadoresLogicos_a07")
console.assert(operadoresLogicos(1,0,3) === "Error", "operadoresLogicos_a08")
console.assert(operadoresLogicos(1,2,0) === "Error", "operadoresLogicos_a09")
console.assert(operadoresLogicos(1,5,2) === false, "operadoresLogicos_a10")
console.assert(operadoresLogicos(4,4,2) === false, "operadoresLogicos_a11")
console.assert(operadoresLogicos(4,8,8) === false, "operadoresLogicos_a12")
console.assert(operadoresLogicos(-1,2,0) === "Hay negativos", "operadoresLogicos_a13")
console.assert(operadoresLogicos(4,2,2) === "Número 1 es mayor y positivo", "operadoresLogicos_a14")
console.assert(operadoresLogicos(4,4,8) === 9, "operadoresLogicos_a15")


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if ( numero <= 1) { return false }
  for ( var i = 2; i <= Math.sqrt(numero); i++ ){
    if (numero % i === 0) return false
  }
  return true
}

console.assert(esPrimo(0) === false, "esPrimo_a01")
console.assert(esPrimo(1) === false, "esPrimo_a02")
console.assert(esPrimo(2) === true, "esPrimo_a03")
console.assert(esPrimo(7) === true, "esPrimo_a04")
console.assert(esPrimo(15) === false, "esPrimo_a05")
console.assert(esPrimo(15) === false, "esPrimo_a06")
console.assert(esPrimo(997) === true, "esPrimo_a07")
console.assert(esPrimo(994009) === false, "esPrimo_a08")




function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? "Soy verdadero": "Soy falso"
}
 
console.assert(esVerdadero(true) === "Soy verdadero", "esVerdadero_a01")
console.assert(esVerdadero(false) === "Soy falso", "esVerdadero_a02")
console.assert(esVerdadero(1 > 2) === "Soy falso", "esVerdadero_a03")
console.assert(esVerdadero(1 <= 2) === "Soy verdadero", "esVerdadero_a04")


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = []
  for ( i = 0; i <= 10; i++){
    tabla[i] = i * 6
  }
  return tabla
}

console.assert(Array.isArray(tablaDelSeis()) === true, "tablaDelSeis_a01")
console.assert(JSON.stringify(tablaDelSeis()) === JSON.stringify([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]), "tablaDelSeis_a02")

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  let absoluto = Math.abs(numero)
  return absoluto > 99 && absoluto < 1000
}
console.assert(tieneTresDigitos(125) === true, "tieneTresDigitos_a01")
console.assert(tieneTresDigitos(1252) === false, "tieneTresDigitos_a02")
console.assert(tieneTresDigitos(-125) === true, "tieneTresDigitos_a03")
console.assert(tieneTresDigitos(25) === false, "tieneTresDigitos_a04")


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let contador = 1
  do {
    numero = numero + 5
    contador++
  } while (contador <= 8)
  return numero
}

console.assert(doWhile(0) === 40, "doWhile_a01")
console.assert(doWhile(-5) === 35, "doWhile_a02")
console.assert(doWhile(13) === 53, "doWhile_a03")


