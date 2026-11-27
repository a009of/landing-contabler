const enlacesSeccion = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'); //Busca todos los enlaces que apunten a secciones de la misma pagina.

enlacesSeccion.forEach((enlace: HTMLAnchorElement) => { //Recorre cada enlace uno por uno
    enlace.addEventListener("click", () => { //Espera a que el usuario haga click
        const destino: string | null = enlace.getAttribute("href");//Lee el valor del atributo (#funciones), devuelve null si el atributo no existiera

        if (destino){ //comprueba que destino si sea tipo string y muestra el mensajeñ
            console.log("Navegando hacia:", destino)
        }
    })
})
