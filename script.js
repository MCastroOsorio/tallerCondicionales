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

//Ejercicio 8
let opcionMenu = prompt(
  'Ingrese la opción de Menu: 1 para "Pizza", 2 para "Hamburguesa", 3 para "Tacos"'
);
switch (opcionMenu) {
  case "1":
    console.log("El plato seleccionado es Pizza");
    break;
  case "2":
    console.log("El plato seleccionado es Hamburguesa");
    break;
  case "3":
    console.log("El plato seleccionado es Tacos");
    break;
  default:
    console.log("Opción no válida");
    break;
}

//Ejercicio 9
let ladoA = prompt('Ingrese el lado A: ');
let ladoB = prompt('Ingrese el lado B: ');
let ladoC = prompt('Ingrese el lado C: ');

if(ladoA === ladoB && ladoB === ladoC){
    console.log('Es un triángulo equilatero')
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    console.log('Es un triangulo isósceles')
} else {
    console.log('Es un triángulo escaleno')
}

//Ejercicio 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let adivinaNumero = prompt("Adivina un número entre 1 y 10: ");
adivinaNumero = parseInt(adivinaNumero);
if (adivinaNumero === numeroAleatorio){
    console.log("¡Has acertado!")
} else{
    console.log("Intenta de nuevo")
};

//Ejercicio 11
let precioBase = parseFloat(prompt('Ingrese el precio base de un producto: '));
if (precioBase > 500){
    let descuento15 = precioBase * 0.15
    let descuento1 = precioBase - descuento15;
    console.log("El precio final después del descuento es: " + descuento1)
} else if(precioBase >= 300 && precioBase <= 500){
    let descuento10 = precioBase * 0.10;
    let descuento2 = precioBase - descuento10;
    console.log("El precio final después del descuento es: " + descuento2);
} else if (precioBase < 300){
    let descuento05 = precioBase * 0.05;
    let descuento3 = precioBase - descuento05;
    console.log("El precio final después del descuento es: " + descuento3);
}

//Ejercicio 12
let year = parseInt(prompt('Ingrese un año: '))
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " Es un año biciesto")
} else {
    console.log(year + " No es un año biciesto")
}

//Ejercicio 13
let userName =  prompt('Ingrese su nombre de usuario: ');
let password = parseInt(prompt('Ingrese su contraseña: '));
if (userName === "admin" && password === 1234){
    console.log("Acceso concedido");
} else{
    console.log("Acceso denegado");
}
   
//Ejercicio 14
let hora = parseInt(prompt('Ingrese una hora (solo el número de la hora, de 0 a 23)'));
if (hora >= 6 && hora < 12){
    console.log('Buenos días')
} else if (hora >= 12 && hora < 18){
    console.log('Buenas tardes')
} else if ((hora >= 18 && hora < 24) || (hora >= 0 && hora < 6)){
    console.log('Buenas noches')
};
 */
//Ejercicio 15
let peso = parseFloat(prompt('Ingrese su peso: '));
let altura = parseFloat(prompt('Ingrese su altura: '));
let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('Bajo peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Peso normal')
}  else if (imc >= 25 && imc <= 29.9){
    console.log('Sobrepeso')
} else {
    clasificacion = "Obesidad"; 
}