//Funcion clasica

function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(4, 5));

//Funcion flecha

let suma1 = (num01, num02) => num01 + num02;
console.log(suma1(4, 5));

//funcion flecha con un parametro 

const cuadrado = x => x * x;
console.log(`el cuadrado de 6 es ${cuadrado(6)}`);

//funcion con cuerpo

const tipo = numero => {
    if (numero > 0) {
        return 'Es positivo';
    } else if (numero < 0) {
        return 'Es negativo';
    } else {
        return 'Es cero'
    }
};

console.log(tipo(-34));