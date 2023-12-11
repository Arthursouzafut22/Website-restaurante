
export default function modalJs() { 
    const abrirModal = document.querySelector('[ data-modal="abrir"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]')
    const modal = document.querySelector('[data-modal="container"]')
    
    function toggleModal(event) {
        event.preventDefault()
        modal.classList.toggle('active')
    }
    
    function clickForaModal(event) {
        if(event.target === this)
        toggleModal(event)
    }
    
    abrirModal.addEventListener('click', toggleModal)
    fecharModal.addEventListener('click', toggleModal);
    modal.addEventListener('click', clickForaModal)
     }