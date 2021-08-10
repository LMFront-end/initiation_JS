const numeros = [1, 2, 4, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 16, 45, 67, 78, 89, 34, 56, 78, 90];

numeros.forEach(function(numero) {
    console.log(numero * 2);
});

//aplicar funcion a cada elemento del array - MAP

const duplica = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Usando MAP");
console.log(duplica);

//extraer elemento que cumple una condicion -FILTER

const mayores = numeros.filter(function(numero) {
    return numero > 9;
});

console.log("usanado Filter");
console.log(mayores);

//devolver indice de valor coincidente

const indice = numeros.findIndex(function(valor) {
    return valor === 7;
});

console.log("coincide el 7 en el indice ...");
console.log(indice);

//devolver elemento conincidente

const valor = numeros.find(function(numero) {
    return numero === 5;
});

console.log("coincide el valor 5");
console.log(valor);