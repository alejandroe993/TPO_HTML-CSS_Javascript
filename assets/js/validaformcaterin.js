// Obtener referencias a los elementos del formulario
const form = document.querySelector(".catering-form");
const submitButton = document.querySelector("#submit");

// Agregar un evento al botón de envío
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar los campos del formulario
  const nombre = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensaje = document.querySelector("#message").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return;
  }

  // Validar el formato del correo electrónico utilizando una expresión regular simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // Mostrar la ventana modal de agradecimiento
  const modal = document.getElementById("modal");
  modal.style.display = "block";
});

// Agregar un evento al botón de cerrar la ventana modal
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  // Cerrar la ventana modal
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

// Agregar un evento al botón de cerrar en la ventana modal
const modalCloseButton = document.querySelector("#modal-close");
modalCloseButton.addEventListener("click", function () {
  // Cerrar la ventana modal
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});
