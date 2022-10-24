// No cambies los nombres de las funciones.

const frutas = ['manzana', 'pera', 'banana']
const enteros = [10,3,2,556,21]

const devolverPrimerElemento = (array) => {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}

console.assert( devolverPrimerElemento(frutas) === 'manzana', 'devolverPrimerElemento_a01')
console.assert( devolverPrimerElemento(enteros) === 10, 'devolverPrimerElemento_a02')


const devolverUltimoElemento = (array) => {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]
}
console.assert( devolverUltimoElemento(frutas) === 'banana', 'devolverUltimoElemento_a01')
console.assert( devolverUltimoElemento(enteros) === 21, 'devolverUltimoElemento_a02')

const obtenerLargoDelArray = (array) => {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
console.assert( obtenerLargoDelArray(frutas) === 3, 'obtenerLargoDelArray_a01')
console.assert( obtenerLargoDelArray(enteros) === 5, 'obtenerLargoDelArray_a02')

const incrementarPorUno = (array) => {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(element => element + 1)
}
console.assert(JSON.stringify(incrementarPorUno(enteros)) === JSON.stringify([ 11, 4, 3, 557, 22 ]), 'incrementarPorUno_a01')

const agregarItemAlFinalDelArray = (array, elemento) => {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}
console.assert(JSON.stringify(agregarItemAlFinalDelArray(frutas, 'pera')) === JSON.stringify(['manzana', 'pera', 'banana','pera']),  'agregarItemAlFinalDelArray_a01')


const agregarItemAlComienzoDelArray = (array, elemento) => {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}
console.assert(JSON.stringify(agregarItemAlComienzoDelArray(frutas, 'uva')) === JSON.stringify(['uva','manzana', 'pera', 'banana','pera']),  'agregarItemAlComienzoDelArray_a01')



const dePalabrasAFrase = (palabras) => {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}

console.assert(dePalabrasAFrase(['Hello', 'world!']) === 'Hello world!', 'dePalabrasAFrase_a01')

const arrayContiene = (array, elemento) => {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento)
}

console.assert(arrayContiene(['Hello', 'world!'], 'Hello') === true, 'arrayContiene_a01')
console.assert(arrayContiene(['Hello', 'world!'], 'Hello!') === false, 'arrayContiene_a02')


const agregarNumeros = (numeros) => {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let result = 0
  numeros.forEach(number => {
    result += number
  });
  return result
}
console.assert(agregarNumeros([4,13,23,46]) === 86, 'agregarNumeros_a01')

const promedioResultadosTest = (resultadosTest) => {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = 0
  resultadosTest.forEach(number => {
    sum += number
  });
  return sum / resultadosTest.length
}
console.assert(promedioResultadosTest([4,13,23,46]) === 21.5, 'promedioResultadosTest_a01')


const numeroMasGrande = (numeros) => {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros)
}
console.assert(numeroMasGrande([-1, -3, -2]) === -1, 'numeroMasGrande_a01')

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if ( arguments.length < 1 ){ 
    return 0
  }

  let total = arguments[0]
  for ( i = 1; i < arguments.length; i++){
    total = total * arguments[i]
  }
  return total
}

console.assert(multiplicarArgumentos(5, 4, -2, 10) === -400, 'multiplicarArgumentos_a01')
console.assert(multiplicarArgumentos() === 0, 'multiplicarArgumentos_a02')
console.assert(multiplicarArgumentos(5) === 5, 'multiplicarArgumentos_a03')
console.assert(multiplicarArgumentos(5, 1) === 5, 'multiplicarArgumentos_a04')
console.assert(multiplicarArgumentos(5, 4, -2, 10, 0) === 0, 'multiplicarArgumentos_a05')

const cuentoElementos = (arreglo) => {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  return arreglo.filter(numero => numero > 18).length;
}
console.assert(cuentoElementos([2,86,84]) === 2, 'cuentoElementos_a01')
console.assert(cuentoElementos([2,8,4]) === 0, 'cuentoElementos_a02')
console.assert(cuentoElementos([2,18,24]) === 1, 'cuentoElementos_a03')



const diaDeLaSemana = (numeroDeDia) => {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia){
    case 1:
    case 7:
      return 'Es fin de semana'
      break
    default:
      return 'Es dia Laboral'
      break
  }
} 
console.assert(diaDeLaSemana(1) === 'Es fin de semana', 'diaDeLaSemana_a01')
console.assert(diaDeLaSemana(2) === 'Es dia Laboral', 'diaDeLaSemana_a02')
console.assert(diaDeLaSemana(3) === 'Es dia Laboral', 'diaDeLaSemana_a03')
console.assert(diaDeLaSemana(4) === 'Es dia Laboral', 'diaDeLaSemana_a04')
console.assert(diaDeLaSemana(5) === 'Es dia Laboral', 'diaDeLaSemana_a05')
console.assert(diaDeLaSemana(6) === 'Es dia Laboral', 'diaDeLaSemana_a06')
console.assert(diaDeLaSemana(7) === 'Es fin de semana', 'diaDeLaSemana_a07')



const empiezaConNueve = (n) => {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return String(n)[0] === '9'
}
console.assert(empiezaConNueve(9) === true, 'empiezaConNueve_a01')
console.assert(empiezaConNueve(90) === true, 'empiezaConNueve_a02')
console.assert(empiezaConNueve(9485) === true, 'empiezaConNueve_a03')
console.assert(empiezaConNueve(19) === false, 'empiezaConNueve_a04')
console.assert(empiezaConNueve(34) === false, 'empiezaConNueve_a05')



const todosIguales = (arreglo) => {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  return arreglo.every(elemento => elemento === arreglo[0])
} 
console.assert(todosIguales([4,4,4,4,4,4]) === true, 'todosIguales_a01')
console.assert(todosIguales(['pepe', 'pepe', 'pepe']) === true, 'todosIguales_a02')
console.assert(todosIguales([4,4,4,4,3,4]) === false, 'todosIguales_a03')

const mesesDelAño = (array) => {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let selectedMonths = [ 'Enero', 'Marzo', 'Noviembre']
  let filteredMonths = array.filter(month => selectedMonths.includes(month)).sort()
  return filteredMonths.length === selectedMonths.length ? filteredMonths: 'No se encontraron los meses pedidos'
}
console.assert(JSON.stringify(mesesDelAño(["Noviembre", "Enero", "Marzo", "Diciembre"])) === JSON.stringify(["Enero", "Marzo", "Noviembre"]), 'mesesDelAño_a01')
console.assert(mesesDelAño(["Enero", "Noviembre", "Diciembre"]) === 'No se encontraron los meses pedidos', 'mesesDelAño_a02')


const mayorACien = (array) => {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  return array.filter(numero => numero > 100)
}
console.assert(JSON.stringify(mayorACien([0, 123, 200, 100])) ===  JSON.stringify([123,200]), 'mayorACien_a01')
console.assert(JSON.stringify(mayorACien([0, 13, 20, 10])) ===  JSON.stringify([]), 'mayorACien_a02')
console.assert(JSON.stringify(mayorACien([110, 123, 157, 200])) ===  JSON.stringify([110, 123, 157, 200]), 'mayorACien_a03')



const breakStatement = (numero) => {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let arrayResult = []
  for ( i=0; i < 10; i++){
    numero += 2
    arrayResult.push(numero) 
    if ( arrayResult[i] === i + 1 ) {   
      return 'Se interrumpió la ejecución'
      break
    }
  }
  return arrayResult
}

console.assert(JSON.stringify(breakStatement(2)) === JSON.stringify([4,6,8,10,12,14,16,18,20,22]), 'breakStatement_a01')
console.assert(JSON.stringify(breakStatement(1)) === JSON.stringify([3,5,7,9,11,13,15,17,19,21]), 'breakStatement_a02')
console.assert(JSON.stringify(breakStatement(0)) === JSON.stringify([2,4,6,8,10,12,14,16,18,20]), 'breakStatement_a03')
console.assert(JSON.stringify(breakStatement(-11)) === JSON.stringify([-9,-7,-5,-3,-1,1,3,5,7,9]), 'breakStatement_a04')
console.assert(breakStatement(-2) === 'Se interrumpió la ejecución', 'breakStatement_a05')
console.assert(breakStatement(-1) === 'Se interrumpió la ejecución', 'breakStatement_a06')
console.assert(breakStatement(-10) === 'Se interrumpió la ejecución', 'breakStatement_a07')


const continueStatement = (numero) => {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arrayResult = []
  for ( i= 0; i < 10; i++){
    if ( i + 1 === 5 ) {   
      continue
    }
    numero += 2
    arrayResult.push(numero)  
  }
  return arrayResult
}

console.assert(JSON.stringify(continueStatement(2)) === JSON.stringify([4,6,8,10,12,14,16,18,20]), 'continueStatement_a01')
console.assert(JSON.stringify(continueStatement(-11)) === JSON.stringify([-9,-7,-5,-3,-1,1,3,5,7]), 'continueStatement_a02')
console.assert(JSON.stringify(continueStatement(-2)) === JSON.stringify([0,2,4,6,8,10,12,14,16]), 'continueStatement_a03')
