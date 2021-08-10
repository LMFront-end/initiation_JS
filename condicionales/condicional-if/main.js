//edad

let edad = prompt("¿Cual es tu edad");

if (edad > 18) {
    console.log("Ya eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//numero par o impar 

let num = prompt("Ingresa un numero");

num = parseInt(num);

if (num > 0) {
    console.log("El numero es mayor que cero");
} else if (num < 0) {
    console.log("El numero es menor que cero");
} else {
    console.log("el numero es igual a cero");
}