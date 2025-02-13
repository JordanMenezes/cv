import { setupThemeToggle } from './modules/theme.js';
import { setupScrollAnimations, animateSkills } from './modules/animations.js';
import { setupWhatsAppLink } from './modules/whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupScrollAnimations();
    animateSkills();
});
