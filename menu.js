
export default function menuMobile() {  
    const btnmobile = document.querySelector('.btn-mobile');
    function clicar(event) {
      if(event.type === 'touchstart') {
         event.preventDefault();
      }
       const nav = document.getElementById('nav');
       nav.classList.toggle('ativo');
    }
   
   btnmobile.addEventListener('click', clicar);
   btnmobile.addEventListener('touchstart', clicar);
   }