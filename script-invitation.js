
// LOGICA DEL CONTADOR

const fechaBoda = new Date(2025, 10, 28, 16, 0, 0).getTime();

let actualizarContador = setInterval(() => {
    let hoy = new Date().getTime();

    // Calculo de los milisegundos entre la fecha de la boda y el dia actual
    let distancia = fechaBoda - hoy;

    // Calculo de dias, horas, minutos y segundos faltantes para la boda
    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60) / (1000 * 60)));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (dias.toString().length < 2) {
        document.querySelector(".contador-datos-dias").innerHTML = "0" + dias + " :";
    } else {
        document.querySelector(".contador-datos-dias").innerHTML = dias + " :";
    }

    if (horas.toString().length < 2) {
        document.querySelector(".contador-datos-horas").innerHTML = "0" + horas + " :";
    } else {
        document.querySelector(".contador-datos-horas").innerHTML = horas + " :";
    }

    if (minutos.toString().length < 2) {
        document.querySelector(".contador-datos-minutos").innerHTML = "0" + minutos + " :";
    } else {
        document.querySelector(".contador-datos-minutos").innerHTML = minutos + " :";
    }

    if (segundos.toString().length < 2) {
        document.querySelector(".contador-datos-segundos").innerHTML = "0" + segundos;
    } else {
        document.querySelector(".contador-datos-segundos").innerHTML = segundos;
    }
}, 1000);


// CARRUCEL DE IMÁGENES

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// FORMULARIO DE CONFIRMACION DE ASISTENCIA

const URLform = 'https://script.google.com/macros/s/AKfycbxPIxo4bIu3EpKQVgSjB1Wv68wqlPL_fGfaA1TUFbMfm8nJxT2TATYv5IuR3Th_XWEY/exec';

const form = document.forms['confirmacion-formulario'];
const dialog = document.getElementById('confirmacion-dialog');
const dialogError = document.getElementById('error-dialog');
const recargar = document.querySelector('.recargar');
const botonConfirmacion = document.querySelector('.boton-confirmacion')

form.addEventListener('submit', e => {
    e.preventDefault();
    botonConfirmacion.disabled = true;
    botonConfirmacion.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>';


    fetch(URLform, { method: 'POST', body: new FormData(form) })
        .then(response => dialog.showModal())
        .then(() => recargar.addEventListener('click', () => {
            window.location.reload()
        }))
        .catch(error => dialogError.showModal())
})