const el1 = document.querySelector('#menu-it1');
const cont1 = document.querySelector('#submenu1');

const el2 = document.querySelector('#menu-it2');
const cont2 = document.querySelector('#submenu2');

const el3 = document.querySelector('#menu-it3');
const cont3 = document.querySelector('#submenu3');

const el4 = document.querySelector('#menu-it4');
const cont4 = document.querySelector('#submenu4');

el1.addEventListener('click', (event) => {
    event.preventDefault(); 
    cont1.style.display = 'block';
});

el2.addEventListener('click', (event) => {
    event.preventDefault(); 
    cont2.style.display = 'block';
});

el3.addEventListener('click', (event) => {
    event.preventDefault(); 
    cont3.style.display = 'block';
});

el4.addEventListener('click', (event) => {
    event.preventDefault(); 
    cont4.style.display = 'block';
});


