//link da var com a classe do html
var btnMenu = document.querySelector('.btn-menu');

var menu = document.querySelector('.menu'); 

var header = document.querySelector('.header');

/*
console.log(btnMenu);
console.log(menu);
*/

btnMenu.addEventListener('click', function(){
    //alert('ok');
    menu.classList.toggle('menu-open');

    btnMenu.classList.toggle('animation');
});


// Menu fixo ao rolar
window.addEventListener('scroll', function(){
    //console.log('rolou');

    if(window.scrollY > 658){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
})