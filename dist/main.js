"use strict";
const enlacesSeccion = document.querySelectorAll('a[href^="#"]'); //Busca todos los enlaces que apunten a secciones de la misma pagina.
enlacesSeccion.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        const destino = enlace.getAttribute("href"); //Lee el valor del atributo (#funciones), devuelve null si el atributo no existiera
        if (destino) { //comprueba que destino si sea tipo string y muestra el mensajeñ
            console.log("Navegando hacia:", destino);
        }
    });
});
