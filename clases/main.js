class coche {
    //constructor
    constructor(marca, motor, color) {
        this._color = color;
        this.marca = marca;
        this.motor = motor;
        this._velocidad = 0;
    }

    //atributos: cambia valor a nuestros atributos con estos metodos

    get velocidad() {
        return this._velocidad;
    }

    set cambiarColor(color) {
        this._color = color;
    }

    get dameDatos() {
        return `El coche ${this.marca} es de color ${this._color}`;
    }

    //metodos (sin poner function)

    arrancar() {
        console.log("arrancando");
    }

    parar() {
        console.log("parado");
    }

    acelerar() {
        this._velocidad = this._velocidad + 10;
        console.log(`La velocidad actual = ${this._velocidad}`)
    }

    frenar() {
        if (this._velocidad > 0) {
            this._velocidad = this._velocidad - 10;
            console.log(`La velocidad actual = ${this._velocidad}`)
        } else {
            this._velocidad = 0;
            console.log(`La velocidad actual = ${this._velocidad}`)
        }
    }
}

const micoche = new coche('soat', 'automatico', 'rojo');

console.log(micoche.dameDatos);
micoche.arrancar();
micoche.acelerar();
micoche.acelerar();
console.log(`La velocidad actual es de ${micoche.velocidad}`);
micoche.frenar();
console.log(`La velocidad actual es de ${micoche.velocidad}`);
micoche.cambiarColor = 'rosa';
console.log(micoche.dameDatos);
micoche.parar();