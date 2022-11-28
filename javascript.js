"use strict"

const openMenuBTN = document.querySelector('.open');
const closeMenuBTN = document.querySelector('.close');
const menu = document.querySelector('.menu-container');
const body = document.querySelector('body');

openMenuBTN.addEventListener('click', function(){
    menu.classList.remove('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
})

const closeMenu = function(){
    menu.classList.add('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
}

closeMenuBTN.addEventListener('click', closeMenu);
