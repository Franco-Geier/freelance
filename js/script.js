// "use strict";

// const textarea = document.querySelector('textarea');

// textarea.addEventListener('focus', function() {
//     this.scrollIntoView({ behavior: 'smooth', block: 'center' });
// });

// textarea.addEventListener('input', function() {
//     this.scrollIntoView({ behavior: 'smooth', block: 'center' });
// });


"use strict";

const textarea = document.querySelector('textarea');

// Ajustar la altura del textarea al enfocarse
textarea.addEventListener('focus', function() {
    adjustTextareaHeight();
});

// Ajustar la altura del textarea mientras se escribe
textarea.addEventListener('input', function() {
    adjustTextareaHeight();
});

// Función para ajustar la altura del textarea
function adjustTextareaHeight() {
    // Resetea la altura para recapturar el scrollHeight
    textarea.style.height = 'auto';

    // Establece la altura según el contenido
    textarea.style.height = (textarea.scrollHeight) + 'px';

    // Desplaza el textarea al centro de la pantalla
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Maneja el cambio de orientación en el dispositivo
window.addEventListener('orientationchange', function() {
    // Reajusta la altura cuando cambie la orientación
    adjustTextareaHeight();
});