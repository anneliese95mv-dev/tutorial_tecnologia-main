/*=========================================
    Tutorial React
    Funciones de Interactividad
==========================================*/

/*
Botón Copiar Código
*/

const bloquesCodigo = document.querySelectorAll("pre");

bloquesCodigo.forEach((bloque) => {

    // Crear botón
    const boton = document.createElement("button");
    boton.textContent = "Copiar código";
    boton.classList.add("btn-copiar");

    // Insertar antes del bloque
    bloque.parentNode.insertBefore(boton, bloque);

    // Evento
    boton.addEventListener("click", () => {

        navigator.clipboard.writeText(bloque.innerText);

        boton.textContent = "✓ Copiado";

        setTimeout(() => {
            boton.textContent = "Copiar código";
        }, 2000);

    });

});

/*
Menú Activo
*/

const secciones = document.querySelectorAll("section");
const enlacesMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let posicion = window.scrollY + 180;

    secciones.forEach((seccion) => {

        if (
            posicion >= seccion.offsetTop &&
            posicion < seccion.offsetTop + seccion.offsetHeight
        ) {

            enlacesMenu.forEach((enlace) => {
                enlace.classList.remove("activo");
            });

            const enlaceActivo = document.querySelector(
                `nav a[href="#${seccion.id}"]`
            );

            if (enlaceActivo) {
                enlaceActivo.classList.add("activo");
            }

        }

    });

});


/*
Acordeones
*/

secciones.forEach((seccion) => {

    const titulo = seccion.querySelector("h2");

    if (!titulo) return;

    // Crear contenedor
    const contenido = document.createElement("div");

    while (titulo.nextSibling) {
        contenido.appendChild(titulo.nextSibling);
    }

    contenido.classList.add("contenido-seccion");

    seccion.appendChild(contenido);

    titulo.style.cursor = "pointer";

    // Agregar flecha al inicio del título

    titulo.innerHTML = "▼ " + titulo.innerHTML;

    titulo.addEventListener("click", () => {

        contenido.classList.toggle("cerrado");

    });

});

/*
Animación al cargar
*/

window.addEventListener("load", () => {

    document.body.classList.add("pagina-cargada");

});

/*
Mensaje de Bienvenida
*/

console.log("Tutorial React cargado correctamente.");