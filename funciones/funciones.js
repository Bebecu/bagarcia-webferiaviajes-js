/* código para index */
document.addEventListener("DOMContentLoaded", () => { /* espero a que cargue la página */
  if (document.querySelector(".saludo_web")) { /* busco el elemento .saludo_web que uso como ancla para index */
    alert("Bienvenid@ a WEFERVI!");
  }
});


/* codigo para top destinos */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".gallery")) {
    const imagenes = document.querySelectorAll(".gallery img");
    imagenes.forEach(img => {
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(2.2)";
        img.style.transition = "transform 0.4s";
      });
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
      });
    });
  }
});
