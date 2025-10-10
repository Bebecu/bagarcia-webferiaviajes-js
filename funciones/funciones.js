/* código para index */
document.addEventListener("DOMContentLoaded", function() { /* espero a que cargue la página */
  if (document.querySelector(".saludo_web")) { /* busco el elemento .saludo_web que uso como ancla para index */
    alert("Bienvenid@ a WEFERVI!");
  }
});


/* codigo para top destinos */
document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelector(".gallery")) { /* selecciono la galería */
    const imagenes = document.querySelectorAll(".gallery img");
    imagenes.forEach(img => { /* voy pasando por cada elemento para que haga una acción en cada una */
      img.addEventListener("mouseover", () => { /* al pasar el mouse */
        img.style.transform = "scale(2.2)"; /* escalo la imagen */
        img.style.transition = "transform 0.4s"; /* tiempo que tarda en escalar */
        img.style.zIndex = "10"; /* hace que esté por encima de las demás */
        img.style.position = "relative"; /* necesario para que z-index funcione */
      });
      img.addEventListener("mouseout", () => { /* al quitar el mouse */
        img.style.transform = "scale(1)"; /* vuelta a su tamaño normal */
      });
    });
  }
});


/* código validación formulario */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener("submit", validacion);

  function validacion(evento) { /* creo la función de validación */
    evento.preventDefault(); /* evito que Submit haga su función inicial para validar */
    var nombre = document.getElementById("nombre").value; /* cojo el campo nombre del formulario */
    if(nombre.length == 0) { /* le digo que si es igual a 0 diga que es inválido */
      alert("El campo de nombre está vacío.");
      return;
    }
    var email = document.getElementById("email").value; /* el email lo valido en base al @ */
    if(!email.includes("@")) {
      alert("La dirección de correo no es válida.");
      return;
    }

    var mensaje = document.getElementById("mensaje").value; /* para el mensaje hago que no pueda ir vacío */
    if(mensaje.length == 0) {
      alert("El mensaje no puede estar vacío.");
    }
  }
});


/* código colores tabla */
document.addEventListener("DOMContentLoaded", function() {
  const tabla = document.getElementById("tabla");
  if (tabla) {
    const filas = tabla.querySelectorAll("tbody tr");

    filas.forEach(fila => {
      fila.style.backgroundColor = "#BBFCCD"; /* color base de las filas */

      fila.addEventListener("mouseover", function() { /* cambio de color si la fila tiene el ratón encima */
        if (fila.style.backgroundColor === "rgb(187, 252, 205)" || fila.style.backgroundColor === "#BBFCCD") {
          fila.style.backgroundColor = "#8EE8A5";
        }
      });

      fila.addEventListener("mouseout", function() { /* vuelta al color normal si no tiene el mouse encima */
        fila.style.backgroundColor = "#BBFCCD";
      });
    });
  }
});


/* código página vuelos */
document.addEventListener("DOMContentLoaded", () => {
  const imagen = document.querySelector("img[alt='Avión volando entre las nubes']"); /* selecciono la imágen por el texto alternativo en vez de por ID, para variar */
  if (imagen) {
    imagen.addEventListener("mouseover", () => { /* al pasar el raton, se desplaza por el eje Y en negativo (hacia arriba) y sale una sombra en la caja */
      imagen.style.transform = "translateY(-10px)";
      imagen.style.transition = "transform 0.5s";
      imagen.style.boxShadow = "0 0 25px rgba(0, 0, 0, 0.5)";
    });

    imagen.addEventListener("mouseout", () => { /* vuelta a su sitio cuando no tiene el mouse encima */
      imagen.style.transform = "translateY(0)";
      imagen.style.boxShadow = "none";
    });

  }
});
