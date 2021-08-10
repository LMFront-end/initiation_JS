let tabla = parseInt(prompt("Que tabla quieres que calcule"));
console.log(`Empezamos con la tabla del ${tabla}`);

let i = 1;
while (i <= 10) {
    result = tabla * i;
    console.log(`${tabla}*${i}=${result}`);
    i++;
}

//do while 

/*
let i = 1;
do {
    result = tabla * i;
    console.log(`${tabla}*${i}=${result}`);
    i++;
} while (i <= 10);
*/