const hamburgerMenu = document.querySelector('.hamburger-menu');

const btnHamburger = document.querySelector('.fa-bars');
const btnCloseHamburger = document.querySelector('.close')

btnHamburger.addEventListener('click',function(){
  
  hamburgerMenu.classList.add('active');
})

btnCloseHamburger.addEventListener('click',function(){

  hamburgerMenu.classList.remove('active');
})