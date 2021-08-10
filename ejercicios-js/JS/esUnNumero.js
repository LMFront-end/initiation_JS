window.onload = function() {
    var numero1 = parseInt(prompt('Ingresa el primer numero', 0));
    var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));

    while (isNaN(numero1) || isNaN(numero2)) {
        var numero1 = parseInt(prompt('Ingresa el primer numero', 0));
        var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));
        break;
    }

    if (numero1 == numero2) {
        alert("los numeros son iguales");

    } else if (numero1 > numero2) {
        alert(`El numero mayor es el ${numero1}`);

    } else {
        alert(`El numero mayor es el ${numero2}`);
    }
}