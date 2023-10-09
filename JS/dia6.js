/*
 · Funció que demanarà {hh:mm:ss} i calcularà el cost de la trucada 
    · Per despenjar -> 10 centims
    · Per minut -> 5 centims
*/

function preuPerTrucada() {
    console.clear();
    let horesCall = parseInt(prompt("Introdueix les hores"));
    let minutsCall = parseInt(prompt("Introdueix els minuts"));
    let segonsCall = parseInt(prompt("Introdueix els segons"));

    /*
        Convertir tots els valors a segons 
        · hores -> hores*3600
        · minuts -> minuts*60
        sumar hores+minuts+segons (tot en segons)
        multiplicar els segons per (0.05/60)
    */

    let preuBase = 0.10;
    let preuTrucada = ((horesCall*3600)+(minutsCall*60)+segonsCall)*(0.05/60);
    let preuTotal = (preuTrucada == 0 ? 0 : preuBase)+preuTrucada;
    console.log(`El preu total de la trucada ha sigut de ${preuTotal} €`);
}

/*
    Donat un color a l'usuari {R/G/B (0-255)} -> passar-lo a hexadecimal[#FF0A01].
    Utilitzar les llibreries de Javascript.
*/