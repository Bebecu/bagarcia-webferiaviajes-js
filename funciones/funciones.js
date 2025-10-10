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


/* código validación formulario */
