"use strict";

const form = document.querySelector('.formulario');
const textarea = form.querySelector('textarea');
const elementoHtml = document.documentElement;

let esHorizontal = false;

form.addEventListener('focusin', function() {
    desactivarScrollSnap();
});

form.addEventListener('focusout', function() {
    activarScrollSnap();
});

textarea.addEventListener('input', function() {
    ajustarAlturaTextArea();
});


window.addEventListener('orientationchange', function() {
    checkOrientacion();
    ajustarAlturaTextArea();
});


function desactivarScrollSnap() {
    elementoHtml.style.scrollSnapType = 'none';
}

function activarScrollSnap() {
    elementoHtml.style.scrollSnapType = 'y mandatory';
}


function checkOrientacion() {
    esHorizontal = window.innerWidth > window.innerHeight;
}

function ajustarAlturaTextArea() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (!esHorizontal) {
        textarea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

checkOrientacion();