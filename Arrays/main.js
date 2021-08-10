//crear array 

const numeros = [];
console.log(numeros);
//arrays con valores 

const colores = ["Amarillo", "Rojo", "Azul", "Negro", "Gris"];
console.log(colores);

//crear arrays con valores iguales 

const seis = new Array(3).fill("Lina te amo");
//mostrar valores 
console.log(seis);

for (let i = 0; i < seis.length; i++) {
    console.log(seis[i]);
    //mostrar posicion 
    console.log(seis.slice(1, 3));
}