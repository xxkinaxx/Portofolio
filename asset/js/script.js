const menuButton = document.getElementsByClassName('menu')[0];
const navbarItem =document.getElementsByClassName('navbar-item');
menuButton.addEventListener('click', function(){
    for(let i = 0; i < navbarItem.length; i++)
        navbarItem[i].classList.toggle('active')
});