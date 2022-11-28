"use strict"

const openMenuBTN = document.querySelector('.open');
const closeMenuBTN = document.querySelector('.close');
const menu = document.querySelector('.menu-container');
const overlay = document.querySelector('.overlay');

openMenuBTN.addEventListener('click', function(){
    menu.classList.remove('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
    overlay.classList.remove('hidden');
})

const closeMenu = function(){
    menu.classList.add('hidden');
    openMenuBTN.classList.toggle('hidden');
    closeMenuBTN.classList.toggle('hidden');
    overlay.classList.add('hidden');
}

closeMenuBTN.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu)
