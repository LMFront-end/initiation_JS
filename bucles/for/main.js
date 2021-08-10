for (i = 0; i < 3; i++) {
    if (i == 1) {
        console.log("hola " + i + " vez");
    } else {
        console.log("Hola " + i + " veces");
    }
}

//calculadora con for 

let tabla = parseInt(prompt("Que tabla quieres que calcule"));
console.log(`Empezamos con la tabla del ${tabla}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${tabla}*${i} = ${tabla*i}`);
}