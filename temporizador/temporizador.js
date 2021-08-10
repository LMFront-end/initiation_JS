window.onload = function() {
    var temporizador;
    //let boton = document.getElementById('boton');
    let parrafo = document.getElementById('parrafo');
    var caja = document.getElementById('caja');

    function temporizador() {
        temporizador = setTimeout(function() {
            console.log('ejecutando temporizador una vez');
        }, 2000);
    }

    function iniciaTemporizador() {
        temporizador = setInterval(function() {
            console.log('Ejecutando temporizador');
        }, 2000);
    }

    function pararTemporizador() {
        clearInterval(temporizador);
        console.log("Temporizador parado");
    }

    function mensaje(texto) {
        parrafo.innerHTML = texto;
        caja.style.backgroundColor = caja.style.backgroundColor == 'pink' ? 'yellow' : 'pink';
    }

    iniciaTemporizador();

    boton.addEventListener('click', function() {
        console.log('haz presionado el boton');
        mensaje('boton pulsado');
        pararTemporizador();
        //temporizador();
    });
}