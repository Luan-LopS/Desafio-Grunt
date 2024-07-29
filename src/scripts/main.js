document.addEventListener('DOMContentLoaded', function(){
    const menu = document.querySelector('#menu')
    const close = document.querySelector('#close')
    const nav = document.querySelector('#nav')


    if(menu){
        menu.addEventListener('click',function(e){
            this.style.display = 'none'
            nav.style.display = 'block'
            close.style.display='block'

            if(this.style.display == 'none'){
                close.addEventListener('click',function(){
                    this.style.display='none'
                    nav.style.display = 'none'
                    menu.style.display = 'block'
                })
            }
        })
    }

    function adjustMenu() {
        if (window.innerWidth >= 1240) {
            menu.style.display = 'none';
            nav.style.display = 'block';
            close.style.display = 'none';
        } else {
            menu.style.display = 'block';
            nav.style.display = 'none';
            close.style.display = 'none';
        }
    }

    adjustMenu();

    // Adiciona evento para redimensionamento da tela
    window.addEventListener('resize', adjustMenu);
   
})


