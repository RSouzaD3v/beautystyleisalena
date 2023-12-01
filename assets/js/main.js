function allFunctions(){
    function contatos(){
        let contatos = document.querySelector('.contatos');
        let btnContatos = document.querySelector('#btnContatos');

        const mostrarInfor = () => {
            contatos.classList.add('aniContatos');
            if(contatos.classList.contains('aniContatos')){
                setTimeout(() => {
                    contatos.classList.remove('aniContatos');
                }, 2500);
            }
        }

        btnContatos.addEventListener('click', mostrarInfor);

    }

    function menuHidden(){
        let iconMenu = document.querySelector('.iconMenu i');
        let menuMobile = document.querySelector('.navMenuMobile');
        let main = document.querySelector('main');
    
    iconMenu.addEventListener('click', (e) => {
        if (menuMobile.classList.contains('active')){
            menuMobile.classList.remove('active')
        }else{
            menuMobile.classList.add('active');
        }
        })
    }
    
    function showButtonBt(){
        let backTop = document.querySelector('#backTop')
        let pos = window.scrollY;
    
        if(pos > 600){
            backTop.style.display = 'block';
        }else{
            backTop.style.display = 'none';
        }
    }
    
    function headerHidden(){
        let windowWidth = window.innerWidth;
        let pos = window.scrollY;
        let header = document.querySelector('header');
        let logo = header.querySelector('.logo a img');
        console.log(windowWidth);

        if(windowWidth >= 1000){
            if(pos > 0){
                header.style.padding = '15px 180px';
                logo.style.width= "70px";
            }else{
                header.style.padding = '30px 180px';
                logo.style.width= "100px";
            }
        }else{
            header.style.padding = '15px 40px';
            logo.style.width= "70px";
        }
    }


    setInterval(showButtonBt, 500);
    setInterval(headerHidden, 500);
    menuHidden();
    contatos();
}

window.onload = allFunctions();