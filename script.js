
// ANIMACIÓN AL CARGAR LA PÁGINA INICIAL

window.addEventListener('load', () => {
    photoContainer = document.querySelector('.principal-image');

    gsap.to(photoContainer, { opacity: 1, duration: 2 });

    gsap.to(photoContainer, { scale: 1, duration: 2 });


})


