"use strict";

const textarea = document.querySelector('textarea');
const elementoHtml = document.documentElement;

let esHorizontal = false;

textarea.addEventListener('focus', function() {
    desactivarScrollSnap();
    ajustarAlturaTextArea();
});

textarea.addEventListener('input', function() {
    ajustarAlturaTextArea();
});

textarea.addEventListener('blur', function() {
    activarScrollSnap();
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
        textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

checkOrientacion();