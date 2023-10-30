/* Obtenir la data actual del sistema i mostrar: 
    1) Avui és dd del mes mm de l'any yyyy
    2) El nombre de setmana actual de l'any
    3) % de dies transcorreguts de l'any són
    4) % de dies que queden en l'any nn,nn%
    5) ara són les hh:mm:ss
    6) % del dia transcorregut nn,nn%
    7) % de dia que queda nn,nn%
*/
/* dividir entre (365*24*60*60*1000) */

function mostraDadesData() {
    console.clear();
    let data = new Date();
    let dataIniciAny = new Date('01-01-2023');
    let dataFinalAny = new Date('12-31-2023');
    let tempsTranscorregut = data.getTime()-dataIniciAny.getTime();
    let tempsRestant = dataFinalAny.getTime()-data.getTime();
    let tempsAnyMilisegons = 365*24*60*60*1000;
    let tempsDiaMilisegons = 24*60*60*1000;
    let tempsDiaTranscorregut = (data.getHours()*3600+data.getMinutes()*60+data.getSeconds())*1000;
    let diferenciaMilisegons = data.getTime()-dataIniciAny.getTime();
    let numeroDeDies = diferenciaMilisegons/tempsDiaMilisegons;
    let numeroSetmana = numeroDeDies/7;
    console.log(`1) Avui és ${data.getDate()} del mes ${data.getMonth()+1} de l'any ${data.getFullYear()}`);
    console.log(`2) El nombre de setmana actual de l'any és ${Math.ceil(numeroSetmana)}`);
    console.log(`3) % de dies transcorreguts de l'any és ${((tempsTranscorregut/tempsAnyMilisegons)*100).toFixed(2)}`);
    console.log(`4) % de dies que queden en l'any ${((tempsRestant/tempsAnyMilisegons)*100).toFixed(2)}`);
    console.log(`5) Ara són les ${afegeixCero(data.getHours())}:${afegeixCero(data.getMinutes())}:${afegeixCero(data.getSeconds())}`);
    console.log(`6) % del dia transcorregut ${((tempsDiaTranscorregut/tempsDiaMilisegons)*100).toFixed(2)}`);
    console.log(`7) % de dia que queda ${(100-(tempsDiaTranscorregut/tempsDiaMilisegons)*100).toFixed(2)}`);
}

function afegeixCero(valor) { // funció que en cas de (hora, minut, segon) sigui d'un digit afegeix un 0 davant
    if (parseInt(valor) < 10) { valor = "0"+valor; }
    return valor;
}
/*  Els codis de barres poden ser de
    8 -> EAN8
    13 -> EAN13
    El dígit més a la dreta és el de control i es calcula segons una formula:
        - Per calcular començant per la dreta i sense incloure el dígit de control, les posicions imparrels *3 i les parells *1
        i es sumen entre si; la diferència fins el proper múltiple de 10 és el dígit de control

    addLeftZeroPadding(code, max); funció que afegeix 0
    checkdigitControl(codi);
*/

function comprovaCodiBarres() {
    console.clear();
    let codi = addLeftZeroPadding(prompt("Introdueix un codi de barres"));
    console.log(checkdigitControl(codi));
}

function addLeftZeroPadding(codi) {
    if (codi.length < 8) { // si el codi es menor a 8, afegeix 0 fins a 8
        while (codi.length < 8) {
            codi = "0"+codi;
        }
    }
    if (codi.length > 8 && codi.length < 13) { // si el codi es > 8 i < 13, afegeix 0 fins a 13
        while (codi.length < 13) {
            codi = "0"+codi;
        }
    }
    return codi;
}

function checkdigitControl(codi) {
    let resultat = "";
    let digitControl = parseInt(codi.charAt(codi.length-1));
    let valorPerCalcularDigitControl = 0;
    let parImpar = 1;
    let multiple = 10;
    let acumulador = 0;
    for (let i=codi.length-2; i>=0; i--) {
        parImpar % 2 == 0 ? valorPerCalcularDigitControl += (parseInt(codi.charAt(i)) * 1) : valorPerCalcularDigitControl += (parseInt(codi.charAt(i)) * 3);
        parImpar++;
    }
    while (acumulador < valorPerCalcularDigitControl) {
        let multiplicador = 1;
        acumulador += multiple*multiplicador;
        multiplicador++;
    }
    let digitControlCorrecte = acumulador-valorPerCalcularDigitControl;
    digitControlCorrecte == digitControl ? resultat = "Codi EAN correcte" : resultat = "Codi EAN incorrecte";
    return resultat;
}