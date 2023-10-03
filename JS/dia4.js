/* Funció que rep dos nombres i ens diu quin
és més prop de 100
*/
function mesPropDe100() {
    console.clear();
    let primer = parseInt(prompt("Primer nombre"));
    let segon = parseInt(prompt("Segon nombre"));
    let difPrimer = Math.abs(100 - primer);
    let difSegon = Math.abs(100 - segon);
    if (difPrimer < difSegon) {
        console.log(`El primer (${primer}) es més a prop de 100 que el segon (${segon}).`);
    } else if ( difPrimer == difSegon) {
        console.log(`Els nombres ${primer} i ${segon} són a la mateixa distància de 100.`);
    } else {
        console.log(`El segon (${segon}) es més a prop de 100 que el primer (${primer}).`);
    }
}

/* Funció que demana 3 números (hora, minut, segon) i
mostra la data (hora) un segon més tard.
*/
function unSegonMesTard() { // funció que retorna la hora introduïda + 1 segon
    console.clear();
    let hora = parseInt(prompt("Introdueix hores"));
    let minut = parseInt(prompt("Introdueix minuts"));
    let segons = parseInt(prompt("Introdueix segons"));
    let horaActualMesUnSegon = new Date("2023", "10", "02", hora, minut, segons+1, 0);
    console.log(`Hora: ${afegeixCero(horaActualMesUnSegon.getHours())}:${afegeixCero(horaActualMesUnSegon.getMinutes())}:${afegeixCero(horaActualMesUnSegon.getSeconds())}`);
}

function afegeixCero(valor) { // funció que en cas de (hora, minut, segon) sigui d'un digit afegeix un 0 davant
    if (parseInt(valor) < 10) { valor = "0"+valor; }
    return valor;
}

/* Funció que demana 3 números (any, mes, dia) i dirà
si és una data vàlida 
*/

function esDataValida() {
    console.clear();
    let anyo = parseInt(prompt("Introdueix l'any"));
    let mes = parseInt(prompt("Introdueix el mes"));
    let dia = parseInt(prompt("Introdueix el dia"));
    let dataActual = new Date(anyo, mes, dia);
    if ( dataActual.getFullYear() == anyo && dataActual.getMonth() == mes && dataActual.getDate() == dia) {
        console.log(`La data ${dataActual.getFullYear()+"/"+dataActual.getMonth()+"/"+dataActual.getDate()} és una data vàlida.`);
    } else {
        console.log("No és una data vàlida.");
    }
}

/* Funció que rep un nº de dies i els converteix en una data en concret (els mesos són tots de 30 dies)
*/
function converteixAData() {
    console.clear();
    let dies = parseInt(prompt("Introdueix el nombre de dies"));
    let dataAny = Math.floor((dies/365));
    let dataMesos = Math.floor(((dies%365)/30));
    let dataDies = Math.floor((dies%365)%30);
    console.log("Dies: "+dataDies);
    console.log("Mesos: "+dataMesos);
    console.log("Anys:"+dataAny);
}