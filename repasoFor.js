"use strict";
exports.__esModule = true;
exports.sumaLongitudPalabras = void 0;
var repasoIf_1 = require("./repasoIf");
function impares(max) {
    for (var i = 1; i < max; i + 2) {
        console.log(i);
    }
}
//////////////////////////////////////////////////////////////////
function invertir(arr) {
    var inverso = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        inverso.push(arr[i]);
    }
    return inverso;
}
//////////////////////////////////////////////////////////////////
var arcoiris = ["rojo", "naranja", "amarillo", "azul", "añil", "violeta",];
function Arcoiris(colores) {
    for (var i = 0; colores.length; i++) {
        if (arcoiris.includes(colores[i])) {
            console.log(colores[i] + " Es un color del arcoiris ");
        }
        else {
            console.log(colores[i] + " No es un color del arcoiris ");
        }
    }
}
//////////////////////////////////////////////////////////////////
function sumaLongitudPalabras(entrada) {
    var resultado = 0;
    for (var i = 0; i < entrada.length; i++) {
        resultado += entrada[i].length;
    }
    return resultado;
}
exports.sumaLongitudPalabras = sumaLongitudPalabras;
//////////////////////////////////////////////////////////////////
var arry1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var arry2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil",];
var arry3 = ["Venezuela", "Veneno", "Voltaje"];
var todos = [arry1, arry2, arry3];
for (var i = 0; i < todos.length; i++) {
    var totalCaracteres = sumaLongitudPalabras(todos[i]);
    console.log("el array " + todos[i] + "tiene:");
    console.log(totalCaracteres + "caracteres --> " + (0, repasoIf_1.paroImpar)(totalCaracteres));
}
