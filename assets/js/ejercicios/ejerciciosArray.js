/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz, Eduardo */
const clasificaciones = ['Marcos', 'Franco', 'Agostina', 'Leon', 'Juan Cruz', 'Eduardo']
/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

const mostrarClasificacion = (olId) => {
    let ol = document.getElementById(olId)   
    for ( let i = 0; i < clasificaciones.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`${clasificaciones[i]}`));
        ol.appendChild(li);
    }
 }

mostrarClasificacion('ejercicios-array-posicion-inicial')

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

clasificaciones[2]= "Leon"
clasificaciones[3]= "Agostina"

mostrarClasificacion('ejercicios-array-adelantamiento')

/* b)Eduardo es descalificado y se elimina del concurso */

clasificaciones.splice(clasificaciones.findIndex(participante => participante == "Eduardo"))
mostrarClasificacion('ejercicios-array-descalificacion')

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
clasificaciones.splice(1,0,"Julieta", "Martina")
mostrarClasificacion('ejercicios-array-nuevos-participantes')

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift("Alicia")
/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

mostrarClasificacion('ejercicios-array-ultima-participante')
