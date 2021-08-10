//console.log("si funciona")

const alumnos = {
    nombre: "Lina",
    apellido: "Guerrero",
    email: "g@gmail.com",
    nota: 5.0
}

//modificar algun valor
console.log(alumnos);
alumnos['nota'] = 4.6;
console.log(alumnos);

//estructura compleja JSON

const alumnos2 = [{
        nombre: "Lina",
        apellido: "Guerrero",
        edad: 22,
        correo: "lmguerrero@gmail.com",
        nota: 5.0
    },

    {
        nombre: "Mateo",
        apellido: "Vlad",
        edad: 25,
        correo: "Vmateold@gmail.com",
        nota: 5.0
    },

    {
        nombre: "Santiago",
        apellido: "Fontanarrosa",
        edad: 27,
        correo: "ftsanago@gmail.com",
        nota: 4.6
    }
]

console.log(alumnos2);

//agregar un nuevo alumno

let alumnaNueva = {
    nombre: "Camila",
    apellido: "Pava",
    edad: 24,
    correo: "MacaPav@gmail.com",
    nota: 4.0
}

alumnos2.push(alumnaNueva);
console.log(alumnos2);

//Para borrar un elemento

alumnos2.splice(1, 1); //posicion 1
console.log(alumnos2);

//recorrer JSON

for (let i = 0; i < alumnos2.length; i++) {
    console.log(`${alumnos2[i].nombre}`);
}