console.log("Indica el numero de opcion: \n ");

console.log("1.Cargar \n");
console.log("1.Imprimir \n");
console.log("1.Salir \n");

let opcion = parseInt(prompt(("Elige una opción")));

switch (opcion) {
    case 1:
        console.log("cargando....");
        console.log("documento cargado");
        break;

    case 2:
        console.log("Imprimiendo....");
        break;

    case 3:
        console.log("Menu principal");
        break;

    default:
        console.log("\n selección no valida, elija una opcion correcta");
        break;
}