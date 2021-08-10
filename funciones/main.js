console.log("funciona");

//funcion sin parametros y sin retornar valor

function mostrar() {
    console.log("Hola desde la funcion");
}

for (let i = 0; i < 10; i++) {
    //llamar a la funcion
    mostrar();
}

//funcion con parametros

function imprimir(nombre) {
    console.log("Lina Maria");
}

imprimir("Lina");

function suma(a, b) {
    return a + b;
}

let res = (suma(2, 3));
console.log(res);