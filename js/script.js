"use strict";

const textarea = document.querySelector('textarea');
const htmlElement = document.documentElement;

// Desactiva el scroll-snap al interactuar con el textarea
textarea.addEventListener('focus', function() {
    disableScrollSnap();
    adjustTextareaHeight();
});

textarea.addEventListener('input', function() {
    adjustTextareaHeight();
});

// Rehabilita el scroll-snap cuando el usuario termina de interactuar
textarea.addEventListener('blur', function() {
    enableScrollSnap();
});

// Maneja el cambio de orientación en el dispositivo
window.addEventListener('orientationchange', function() {
    // Reajusta la altura cuando cambie la orientación
    adjustTextareaHeight();
});

// Función para deshabilitar el scroll-snap en todo el documento
function disableScrollSnap() {
    htmlElement.style.scrollSnapType = 'none';
}

// Función para habilitar el scroll-snap en todo el documento
function enableScrollSnap() {
    htmlElement.style.scrollSnapType = 'y mandatory';
}

// Ajusta la altura del textarea dinámicamente
function adjustTextareaHeight() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
