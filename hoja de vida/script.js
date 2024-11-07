// Validación del formulario
(function() {
    'use strict';

    // Capturar todos los formularios que queremos aplicar las validaciones
    var forms = document.querySelectorAll('.needs-validation');

    // Prevenir el envío si no está validado
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Animación al cargar el formulario con jQuery
$(document).ready(function() {
    $("form").hide().fadeIn(1000); // Hace que el formulario aparezca con una animación suave
});
