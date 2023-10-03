function HelloWorld() { // funció que mostra un 'pop-up' amb el missatge Hello World!
        alert('Hello World!');
}
function pulsame() { // funció que mostra una alerta quan es pulsa el botó
        alert('Pulsa el botón de abajo');
}
function arrastraAlert() {
        alert('Has arrastrado un mondogo');
}
function mostraContingutVariat() {
        let x = document.getElementById("entrada").value;
        alert('El contenido se ha modificado a '+x);
}
function mostraTaulaMultiplicar() {
        let x = document.getElementById("taula").value;
        for (let i=1; i<=10; i++) {
                let y = x * i;
                console.log(x + ' x ' + i + ' = ' + y);
        }
}