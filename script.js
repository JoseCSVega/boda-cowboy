
// PLUGGIN ANIMACIÓN DE TEXTO
gsap.registerPlugin(SplitText);

let split = SplitText.create(".nombre-novios", {
    type: "chars"
});

let splitFecha = SplitText.create(".fecha", {
    type: "chars"
})

// ANIMACIÓN AL CARGAR LA PÁGINA INICIAL

window.addEventListener('load', () => {
    photoContainer = document.querySelector('.imagen-principal');

    gsap.to(photoContainer, { opacity: 1, duration: 2 });

    gsap.to(photoContainer, { scale: 1, duration: 2 });

    gsap.from(split.chars, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.05,
    });

    gsap.to(".nombre-novios", { opacity: 1 });

    gsap.from(splitFecha.chars, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.05,
    });

    gsap.to(".fecha", { opacity: 1 });

    gsap.from(".click", {
        x: 350,
        duration: 3,
    });

    gsap.to(".click", { opacity: 1 });

    gsap.from(".leyenda-reservacion", {
        x: 350,
        duration: 3,
    });

    gsap.to(".leyenda-reservacion", { opacity: 1 });

    gsap.to(".txt-animation", {
        scale: 1.4,
        repeat: -1,
        duration: 2
    });

})


