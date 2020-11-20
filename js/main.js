'use strict';

// Turn on the modal

const btn = document.querySelector('.modalButton');
let bodyclass = document.querySelector('.body');
(function clickButton() {
    btn.addEventListener('click', function on() {
        document.querySelector('.modal').style.display = 'block';
        bodyclass.className = 'overlay';
    });
})();


// Turn off the modal

const btnOff = document.querySelector('.okeyButton');
const btnOff2 = document.querySelector('.xButton');
const btnOff3 = document.querySelector('.cancelButton');
const overlay = document.querySelector('.overlay');

(function clickButtonsOff() {
    btnOff.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
        bodyclass.className = 'body';
    });
})();
(function clickButtonsOff() {
    btnOff2.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
        bodyclass.className = 'body';
    });
})();
(function clickButtonsOff() {
    btnOff3.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
        bodyclass.className = 'body';
    });
})();
(function clickButtonsOff() {
    overlay.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
        bodyclass.className = 'body';
    });
})();






