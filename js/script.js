let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

console.log(menu.classList)

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('activeNav');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('activeNav');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active-search');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active-search');
}
// function menubar() {
//     menu.classList.to
// }