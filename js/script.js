"use strict";

const textarea = document.querySelector('textarea');

textarea.addEventListener('focus', function() {
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

textarea.addEventListener('input', function() {
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
});