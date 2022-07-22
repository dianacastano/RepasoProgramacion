"use strict";
exports.__esModule = true;
exports.paroImpar = void 0;
function zodiaco(dia, mes) {
    var signo = "";
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) {
        signo = "Acuario";
    }
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {
        signo = "Piscis";
    }
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        signo = "Aries";
    }
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
        signo = "Tauro";
    }
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
        signo = "Géminis";
    }
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) {
        signo = "Cáncer";
    }
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) {
        signo = "Leo";
    }
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
        signo = "virgo";
    }
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
        signo = "Libra";
    }
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
        signo = "Escorpio";
    }
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo = "Sagitario";
    }
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
        signo = "Capricornio";
    }
    return signo;
}
//////////////////////////////////////////////////////////////////
var america = ["eeuu", "mexico", "ecuador", "colombia", "canada"];
var europa = ["españa", "suecia", "suiza", "italia", "rumania"];
var africa = ["marruecos", "nigeria", "senegal", "etipia", "kenia"];
var asia = ["china", "japon", "indonesia", "tailandia", "vietnam"];
var oceania = ["australia", "nueva zelanda", "fiyi", "samoa", "palaos",];
function continente(pais) {
    var salida = "Te encuentras en: ";
    if (america.includes(pais)) {
        salida.concat("América");
    }
    else if (europa.includes(pais)) {
        salida.concat("Europa");
    }
    else if (africa.includes(pais)) {
        salida.concat("África");
    }
    else if (asia.includes(pais)) {
        salida.concat("Asia");
    }
    else if (oceania.includes(pais)) {
        salida.concat("Oceanía");
    }
    else {
        salida = "No se donde estas.";
    }
    console.log(salida);
}
//////////////////////////////////////////////////////////////////
function paroImpar(num) {
    if (num % 2 === 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
exports.paroImpar = paroImpar;
//////////////////////////////////////////////////////////////////
