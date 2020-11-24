'use strict';

const btn = document.querySelector('.content__button');
const btnOff = document.querySelector('.okayButton');
const btnOff2 = document.querySelector('.xButton');
const btnOff3 = document.querySelector('.cancelButton');

function clickButton(btn) {
    btn.addEventListener('click', function on() {
        document.querySelector('.modal').style.display = 'block';
    });
};

function clickButtonsOff(btn) {
    btn.addEventListener('click', function off() {
        document.querySelector('.modal').style.display = 'none';
    });
};

clickButton(btn);
clickButtonsOff(btnOff);
clickButtonsOff(btnOff2);
clickButtonsOff(btnOff3);
