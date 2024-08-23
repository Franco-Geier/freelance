"use strict";

const form = document.querySelector('.formulario');
const textarea = form.querySelector('textarea');
const elementoHtml = document.documentElement;

let esHorizontal = false;

// Desactiva el scroll-snap al interactuar con cualquier elemento del formulario
form.addEventListener('focusin', function() {
    desactivarScrollSnap();
});

// Reactiva el scroll-snap cuando el usuario deja de interactuar con el formulario
form.addEventListener('focusout', function() {
    activarScrollSnap();
});

// Ajusta la altura del textarea al escribir
textarea.addEventListener('input', function() {
    ajustarAlturaTextArea();
});

// Maneja el cambio de orientación en el dispositivo
window.addEventListener('orientationchange', function() {
    checkOrientacion();
    ajustarAlturaTextArea();
});

// Desactiva el scroll-snap en todo el documento
function desactivarScrollSnap() {
    elementoHtml.style.scrollSnapType = 'none';
}

// Reactiva el scroll-snap en todo el documento
function activarScrollSnap() {
    elementoHtml.style.scrollSnapType = 'y mandatory';
}

// Verifica si el dispositivo está en modo horizontal o vertical
function checkOrientacion() {
    esHorizontal = window.innerWidth > window.innerHeight;
}

// Ajusta la altura del textarea dinámicamente
function ajustarAlturaTextArea() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    // Evita el centrado automático en modo horizontal
    if (!esHorizontal) {
        textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Llama a checkOrientacion para establecer la orientación al cargar la página
checkOrientacion();
