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
        .toString(16);
*/

function colorToHexadecimal() {
    console.clear();
    let red = parseInt(prompt("Introdueix el color RED en decimals"));
    let green = parseInt(prompt("Introdueix el color GREEN en decimals"));
    let blue = parseInt(prompt("Introdueix el color BLUE en decimals"));
    if ((rgbValid(red))&&(rgbValid(green))&&(rgbValid(blue))) {
        let redHex = convertEnHexa(red);
        let greenHex = convertEnHexa(green);
        let blueHex = convertEnHexa(blue);

        let valorHexa = "#"+redHex+greenHex+blueHex;
        console.log(`(${red},${green},${blue})=`+valorHexa);
    } else {
        console.error("ERROR: Els valors han de ser entre 0 i 255");
    }
}

function convertEnHexa(valor) { // converteix decimals en hexadecimal
    let hex = valor.toString(16).toUpperCase()
    return hex.length > 1 ? hex : ("0" + hex);
}

function rgbValid(valor) { //function per comprovar que el valor sigui RGB correcte
    if (valor < 0 || valor > 255) {
        return false;
    }
    return true;
}

/*
    Demanar 2 números
        · preu
        · diners lliurats
    -> mostrar el canvi mínim que
*/

function retornaCanvi() {
    console.clear();
    let preu = parseFloat(prompt("Introdueix el preu"));
    let diners = parseFloat(prompt("Introdueix els diners lliurats"));
    /*
        Declarem array amb les següents valors:
            POSICIO     QUANTITAT
               0           500 €
               1           200 €
               2           100 €
               3            50 €
               4            20 €
               5            10 €
               6             5 €
               7             2 €
               8             1 €
               9           0.5 €
              10           0.2 €
              11           0.1 €
              12          0.05 €
              13          0.02 €
              14          0.01 € 
     */
    let canviFinal = 0;
    let dinersTmp = (diners-preu).toFixed(2);
    let canvi = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let calers = [500,200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];
    let valors = ["500","200","100","50","20","10","5","2","1","0.50","0.20","0.10","0.05","0.02","0.01"];
    while (dinersTmp > 0) {
        for (let i=0; i<calers.length; i++) {
            while (dinersTmp >= calers[i]){
                dinersTmp = (dinersTmp - calers[i]).toFixed(2);
                console.log("dinersTmp val = " + dinersTmp);
                canvi[i]++;
                canviFinal+= calers[i];
            }
        }
    }
    /* SORTIDA: */
    console.log("-----------------------------");
    console.log(`Preu: ${preu} €    Calers: ${diners}`);
    /*Recorre l'array amb bucle for ->*/
    for(let i=0; i<canvi.length; i++) {
        if (canvi[i]>0) {
        console.log(canvi[i]+" de "+valors[i]);
        }
    }
    console.log(`Total canvi ${canviFinal.toFixed(2)} €`);
}