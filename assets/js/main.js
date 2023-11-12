function menuHidden(){
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
}

function showButtonBt(){
    var backTop = document.querySelector('#backTop')
    var pos = window.scrollY;
    console.log(pos)
    if(pos > 600){
        backTop.style.display = 'block';
    }else{
        backTop.style.display = 'none';
    }

}

setInterval(showButtonBt, 500)


window.onload = menuHidden();