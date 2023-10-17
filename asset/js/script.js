// const menuButton = document.getElementsByClassName('menu')[0];
// const navbarItem =document.getElementsByClassName('navbar-item');
// menuButton.addEventListener('click', function(){
//     for(let i = 0; i < navbarItem.length; i++)
//         navbarItem[i].classList.toggle('active')
// });

// script header
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');
nav.onclick = function(){
    marker.classList.toggle('change');
}
function addActiveClass(){
    item.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}
item.forEach((i) =>
i.addEventListener('click', addActiveClass));

// script home
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    // header.style.top = value * 0.5 + 'px';
})