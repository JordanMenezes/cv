// scripts/main.js (ou scripts/modules/whatsapp.js)
export function setupWhatsAppLink() {
    const messageInput = document.getElementById('whatsapp-message');
    const whatsappLink = document.getElementById('whatsapp-link');

    if (!messageInput || !whatsappLink) return; // Exit if elements don't exist

    const updateLink = () => {
        const message = encodeURIComponent(messageInput.value);
        const phoneNumber = '5551991965775'; // Substitua pelo seu número com código do país e DDD
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        whatsappLink.href = whatsappURL;
    };

    // Atualiza o link quando o usuário digita
    messageInput.addEventListener('input', updateLink);

    // Atualiza o link inicialmente (caso haja algum texto padrão)
    updateLink();
}

// No seu main.js, chame a função:
document.addEventListener('DOMContentLoaded', () => {
    // ... outras inicializações ...
    setupWhatsAppLink();
});
