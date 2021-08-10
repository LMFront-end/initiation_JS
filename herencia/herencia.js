class persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    info() {
        return `Hola me llamo ${this._nombre} y tengo ${this._edad} años de edad`;
    }

    //propiedades

    dormir() {
        console.log("Estoy durmiendo");
    }

    comer() {
        console.log("Estoy comiendo");
    }

    despertar() {
        console.log("Estoy despierto");
    }
}

const persona1 = new persona('Lina Maria', 22);

class Trabajador extends persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.trabaja = "si";
    }

    get salario() {
        return this._salario;
    }

    set cambiaSalario(salario) {
        this._salario = salario;
    }

    info() {
        return `Hola me llamo ${this._nombre}, tengo ${this._edad} años de edad y ${this.trabaja} estoy trabajando.`;
    }
}

console.log(persona1.info());
persona1.comer();
persona1.dormir();
persona1.despertar();

const trabajador1 = new Trabajador('Mateo', 25);
console.log(trabajador1.info());
trabajador1.cambiaSalario = 50000000;
console.log(trabajador1.salario);