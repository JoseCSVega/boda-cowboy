
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