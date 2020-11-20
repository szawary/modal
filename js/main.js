'use strict';

// Turn on the modal

const btn = document.querySelector('.modalButton');

(function clickButton() {
    btn.addEventListener('click', function on() {
        document.querySelector('.modal').style.display = 'block';
    });
})();


// Turn off the modal

const btnOff = document.querySelector('.okeyButton');
const btnOff2 = document.querySelector('.xButton');
const btnOff3 = document.querySelector('.cancelButton');

(function clickButtonsOff() {
    btnOff.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
    });
})();
(function clickButtonsOff() {
    btnOff2.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
    });
})();
(function clickButtonsOff() {
    btnOff3.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
    });
})();






