import './style.css'
import { gsap } from 'https://cdn.skypack.dev/gsap';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// On attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  
  gsap.from(".reveal", {
    duration: 1.2,      // Durée de l'anim (1.2 secondes)
    y: 60,               // Part de 60px plus bas
    opacity: 0,          // Part d'invisible
    stagger: 0.2,        // Décale l'apparition de chaque élément de 0.2s
    ease: "power4.out"   // Un effet de freinage très fluide
  });

});