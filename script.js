//Ejercicio 1
/*
let edad = prompt("Ingrese su edad: ");
if(edad >= 18) {
    console.log('Eres mayor de edad')
} else {
    console.log('Eres menor de edad')
}

//Ejercicio 2
let numeroUno = prompt('Ingrese un numero')
if (numeroUno >= 0){
    console.log('El numero es positivo')
} else{
    console.log ('El numero es negativo')
}

//Ejercicio 3
let numeroDos = prompt('Ingrese un numero')
let resultado = numeroDos % 2;
if (resultado == 0){
    console.log('El resultado es par')
}   else{
    console.log('El resultado es impar  ')
}

//Ejercicio 4
//Utilizo parseFloat() para convertir la entrada del usuario, que es una cadena de texto, en un número decimal (de punto flotante).
let totalCompra = parseFloat(prompt("Ingresa el total de la compra:"));
if (totalCompra > 100) {
    let descuento = totalCompra * 0.10;
    let totalConDescuento = totalCompra - descuento;
    
    console.log(totalConDescuento);
} else {
    console.log(totalCompra);
}
//Ejercicio 5
let numero1= prompt('Ingrese el primer numero a comparar: ')
let numero2 = prompt('Ingrese el segundo numero a comparar: ')
if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
} else if (numero1 < numero2) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
} else {
    console.log("Ambos números son iguales.");
}

//Ejercicio 6
let edad = prompt('Ingrese su edad: ')
if (edad > 0 && edad < 12){
    console.log('Eres un niño')
} else if (edad >= 12 && edad <= 17){
    console.log('Eres un adolescente')
} else if (edad >= 18 && edad <= 64){
    console.log('Eres un adulto')
} else if (edad >= 65){
    console.log('Eres un adulto mayor')
}
*/
//Ejercicio 7
let nota = prompt('Ingrese una nota entre 0 y 100')
if (nota >= 90){
    console.log('Excelente')
} else if (nota >= 70){
    console.log('Bueno')
} else if (nota >= 50){
    console.log('Regular')
} else if (nota < 50){
    console.log('Insuficiente')
}