
 export default function animaScroll() {  
    const target = document.querySelectorAll('[data-anime]');
    const windowMetade = window.innerHeight * 0.8;
    
    function animaSroll() {
       target.forEach((section) => {
          const sectionTop = section.getBoundingClientRect(). top - windowMetade;
          if(sectionTop < 0) {
             section.classList.add('animate')
          }
       })
    }
    window.addEventListener('scroll', animaSroll);
}