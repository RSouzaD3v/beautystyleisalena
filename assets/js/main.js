var iconMenu = document.querySelector('.iconMenu i');
var menuMobile = document.querySelector('.navMenuMobile');
var main = document.querySelector('main');

iconMenu.addEventListener('click', (e) => {
    if (menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active')
    }else{
        menuMobile.classList.add('active');
    }
})
