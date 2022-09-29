
// Reemplaza `null` por la respuesta
// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "OK";
console.assert(typeof 'nuevaString' === "string", "nuevaString_a01")

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;
console.assert(typeof nuevoNum === "number", "nuevoNum_a01")

// Crea una variable booleana:
const nuevoBool = true;
console.assert(typeof nuevoBool === "boolean", "nuevoBool_a01")

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
console.assert(nuevaResta, "nuevaResta_a01")


// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;
console.assert(nuevaMultiplicacion, "nuevaMultiplicacion_a01")

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.assert(nuevoModulo, "nuevoModulo_a01")

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
}
console.assert(devolverString("hola") === "hola", "devolverString_a01")


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y
}
console.assert(suma(4, 8) === 12, "suma_a01")

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y - x
}
console.assert(resta(4, 18) === 14, "resta_a01")


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y
}
console.assert(multiplica(4, 8) === 32, "multiplicar_a01")


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y
}
console.assert(divide(24, 8) === 3, "divide_a01")

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x === y) {
    return true
  } else {
    return false
  }
}
console.assert(sonIguales(24, 24) === true, "sonIguales_a01")
console.assert(sonIguales(24, 8) === false, "sonIguales_a01")

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length
}

console.assert(tienenMismaLongitud('mesa', 'paño') === true, "tienenMismaLongitud_a01")
console.assert(tienenMismaLongitud('silla', 'mesa') === false, "tienenMismaLongitud_a02")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90
}
console.assert(menosQueNoventa(90) === false, "menosQueNoventa_a01")
console.assert(menosQueNoventa(14) === true, "menosQueNoventa_a02")
console.assert(menosQueNoventa(-90) === true, "menosQueNoventa_a03")
console.assert(menosQueNoventa(91) === false, "menosQueNoventa_a04")
console.assert(menosQueNoventa(Number.POSITIVE_INFINITY) === false, "menosQueNoventa_a05")
console.assert(menosQueNoventa(Number.NEGATIVE_INFINITY) === true, "menosQueNoventa_a06")



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50
}

console.assert(mayorQueCincuenta(50) === false, "mayorQueCincuenta_a01")
console.assert(mayorQueCincuenta(14) === false, "mayorQueCincuenta_a02")
console.assert(mayorQueCincuenta(-90) === false, "mayorQueCincuenta_a03")
console.assert(mayorQueCincuenta(91) === true, "mayorQueCincuenta_a04")
console.assert(mayorQueCincuenta(Number.POSITIVE_INFINITY) === true, "mayorQueCincuenta_a05")
console.assert(mayorQueCincuenta(Number.NEGATIVE_INFINITY) === false, "mayorQueCincuenta_a06")

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y
}

console.assert(obtenerResto(50, 10) === 0, "obtenerResto_a01")
console.assert(obtenerResto(50, 6) === 2, "obtenerResto_a02")

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0

}

console.assert(esPar(0) === true, "esPar_a01")
console.assert(esPar(45) === false, "esPar_a02")
console.assert(esPar(-3) === false, "esPar_a03")
console.assert(esPar(2) === true, "esPar_a04")
console.assert(esPar(-2) === true, "esPar_a05")
console.assert(esPar(-30) === true, "esPar_a06")
console.assert(esPar(32) === true, "esPar_a07")


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return !esPar(num)
}

console.assert(esImpar(0) === false, "esImpar_a01")
console.assert(esImpar(45) === true, "esImpar_a02")
console.assert(esImpar(-3) === true, "esImpar_a03")
console.assert(esImpar(2) === false, "esImpar_a04")
console.assert(esImpar(-2) === false, "esImpar_a05")
console.assert(esImpar(-30) === false, "esImpar_a06")
console.assert(esImpar(32) === false, "esImpar_a07")


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num ** 2
}

console.assert(elevarAlCuadrado(0) === 0, "elevarAlCuadrado_a01")
console.assert(elevarAlCuadrado(16) === 256, "elevarAlCuadrado_a02")
console.assert(elevarAlCuadrado(-16) === 256, "elevarAlCuadrado_a03")
console.assert(elevarAlCuadrado(-1) === 1, "elevarAlCuadrado_a04")
console.assert(elevarAlCuadrado(1) === 1, "elevarAlCuadrado_a05")

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num ** 3
}

console.assert(elevarAlCubo(0) === 0, "elevarAlCubo_a01")
console.assert(elevarAlCubo(4) === 64, "elevarAlCubo_a02")
console.assert(elevarAlCubo(-4) === -64, "elevarAlCubo_a03")
console.assert(elevarAlCubo(-1) === -1, "elevarAlCubo_a04")
console.assert(elevarAlCubo(1) === 1, "elevarAlCubo_a05")


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return num ** exponent
}

console.assert(elevar(0, 2) === 0, "elevar_a01")
console.assert(elevar(16, 2) === 256, "elevar_a02")
console.assert(elevar(-16, 2) === 256, "elevar_a03")
console.assert(elevar(-1, 2) === 1, "elevar_a04")
console.assert(elevar(1, 2) === 1, "elevar_a05")
console.assert(elevar(0, 3) === 0, "elevar_a06")
console.assert(elevar(4, 3) === 64, "elevar_a07")
console.assert(elevar(-4, 3) === -64, "elevar_a08")
console.assert(elevar(-1, 3) === -1, "elevar_a09")
console.assert(elevar(1, 3) === 1, "elevar_a10")


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}
console.assert(redondearNumero(4.5) === 5, "redondearNumero_a01")
console.assert(redondearNumero(4.48) === 4, "redondearNumero_a02")
console.assert(redondearNumero(4.62) === 5, "redondearNumero_a03")
console.assert(redondearNumero(-4.5) === -4, "redondearNumero_a04") // Ojo con este caso
console.assert(redondearNumero(-4.48) === -4, "redondearNumero_a05")
console.assert(redondearNumero(-4.62) === -5, "redondearNumero_a06")


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}

console.assert(redondearHaciaArriba(4.5) === 5, "redondearHaciaArriba_a01")
console.assert(redondearHaciaArriba(4.48) === 5, "redondearHaciaArriba_a02")
console.assert(redondearHaciaArriba(4.62) === 5, "redondearHaciaArriba_a03")
// Ojo con estos tres casos
console.assert(redondearHaciaArriba(-4.5) === -4), "redondearHaciaArriba_a04" 
console.assert(redondearHaciaArriba(-4.48) === -4, "redondearHaciaArriba_a05")
console.assert(redondearHaciaArriba(-4.62) === -4, "redondearHaciaArriba_a06")

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.floor(Math.random() * 2)
}
let result = numeroRandom()
console.assert((result === 1 || result === 0), "numeroRandom_a01")

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0) return false
  return numero > 0 ? "Es positivo" : "Es negativo"
}
console.assert(esPositivo(15) === "Es positivo", "esPositivo_a01")
console.assert(esPositivo(-32) === "Es negativo", "esPositivo_a02")
console.assert(esPositivo(0) === false, "esPositivo_a03")

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return `${str}!`
}

console.assert(agregarSimboloExclamacion('hola') === 'hola!', "agregarSimboloExclamacion_a01")
console.assert(agregarSimboloExclamacion('') === '!', "agregarSimboloExclamacion_a02")
console.assert(agregarSimboloExclamacion('!') === '!!', "agregarSimboloExclamacion_a03")


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return `${nombre} ${apellido}`
}
console.assert(combinarNombres('cesar', 'morel') === 'cesar morel', "combinarNombres_a01")
console.assert(combinarNombres('Soy', 'Bruce Wayne') === 'Soy Bruce Wayne', "combinarNombres_a02") // Ojo! el ejemplo estaría mal


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}!`

}
console.assert(obtenerSaludo("Martin") === "Hola Martin!"), "obtenerSaludo_a01"


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho
}
console.assert(obtenerAreaRectangulo(2, 15) == 30, "obtenerAreaRectangulo_a01")

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4
}
console.assert(retornarPerimetro(20) === 80, "retornarPerimetro_a01")

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2

}
console.assert(areaDelTriangulo(10, 20) === 100, "areaDelTriangulo_a01")

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2
}

console.assert(deEuroAdolar(1) === 1.2, "deEuroAdolar_a01")
console.assert(deEuroAdolar(7) === 8.4, "deEuroAdolar_a02")
console.assert(deEuroAdolar(0.5) === 0.6, "deEuroAdolar_a03")

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true
      return true
      break
    default:
      return false
  }

}
console.assert(esVocal('b') === false, 'esVocal_a01')
console.assert(esVocal('a') === true, 'esVocal_a02')
console.assert(esVocal('au') === false, 'esVocal_a03')
console.assert(esVocal('0') === false, 'esVocal_a04')
console.assert(esVocal('e') === true, 'esVocal_a05')
console.assert(esVocal('y') === false, 'esVocal_a06')
console.assert(esVocal('A') === true, 'esVocal_a07')