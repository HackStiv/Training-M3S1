document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // evita recargar la página

  const nombre = document.getElementById("nombre").value.trim();
  const edadInput = document.getElementById("edad").value.trim();
  const mensaje = document.getElementById("mensaje");

  const edad = Number(edadInput);

  if (isNaN(edad)) {
    mensaje.innerText = " Error: Por favor, ingresa una edad válida en números.";
    mensaje.style.color = "#f44336"; // rojo
  } else if (edad < 18) {
    mensaje.innerText = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    mensaje.style.color = "#00bcd4"; // celeste
  } else {
    mensaje.innerText = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    mensaje.style.color = "#8bc34a"; // verde claro
  }
});