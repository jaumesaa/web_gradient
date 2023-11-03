var defaultSpeed = 1; // Velocidad por defecto

/* Llama a esta función con una cadena que contiene el nombre del ID del elemento que contiene el número en el que deseas realizar la animación de conteo. */
function incEltNbr(id, speed) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt, speed);
}

/* Una función recursiva para aumentar el número. */
function incNbrRec(i, endNbr, elt, speed) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {
      incNbrRec(i + 1, endNbr, elt, speed);
    }, speed);
  } else {
    illuminateNumber(elt);
  }
}

/* Función para iluminar el número mediante una clase CSS */
function illuminateNumber(elt) {
  elt.classList.add("illuminated"); // Agrega la clase "illuminated"
  setTimeout(function() {
    elt.classList.remove("illuminated"); // Elimina la clase después de 1 segundo
  }, 1000);
}

/* Función llamada al hacer clic en el botón */
function incNbr() {
  incEltNbr("nbr", defaultSpeed); // Usa la velocidad por defecto
}

incEltNbr("nbr", 5); // Usa la velocidad por defecto
incEltNbr("nbr2", 31); // Puedes establecer una velocidad diferente para "nbr2"
incEltNbr("nbr3", 1); // Puedes establecer una velocidad diferente para "nbr3"
