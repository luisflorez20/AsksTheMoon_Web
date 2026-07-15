document.addEventListener('DOMContentLoaded', () => {
    const callButton = document.querySelector('.btn-contacto');
    const contactButton = document.querySelector('.input-group button');
    const phoneInput = document.querySelector('.input-group input');
    const chatButton = document.querySelector('.chat-flotante');

    if (contactButton && phoneInput) {
        contactButton.addEventListener('click', () => {
            if (phoneInput.value.trim() === '') {
                alert('Por favor, ingresa un número de teléfono.');
            } else {
                alert(`✅ ¡Gracias! Te llamaremos al ${phoneInput.value} en breve.`);
                phoneInput.value = '';
            }
        });
    }

    if (callButton) {
        callButton.addEventListener('click', () => {
            alert('📞 Conectando con el equipo de Disorte...');
        });
    }

    if (chatButton) {
        chatButton.addEventListener('click', () => {
            alert('¡Hola! ¿Cómo podemos ayudarte?');
        });
    }

    console.log('🚀 Disorte - Página clonada con éxito');
});
