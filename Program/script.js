const menu = document.getElementById('menu-bars');
const navbar = document.getElementById('navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onclick = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.getElementById('search-icon').onclick = () =>{
  document.getElementById('search-form').classList.toggle('active');
}

