/* Demanar 2 frases a l'usuari i comprovar si tenen la mateixa longitud */
function comparaLength() {
    console.clear();
    let text1 = prompt("Introdueix la primera frase");
    let text2 = prompt("Introdueix la segona frase");
    console.log(text1.length == text2.length ? "Tenen la mateixa longitud" : "No tenen la mateixa longitud"); // es pot fer amb ` --- `
}

/* Demanar un text i una lletra -> dir si la lletra està continguda entre el text */
function conteLletra() {
    console.clear();
    let text = prompt("Introdueix un text");
    let lletra = prompt("Introdueix una lletra");
    let comptador = 0;
    for (let i=0; i<text.length; i++){
        if (text.charAt(i) == lletra[0]) { comptador++; }
    }
    console.log((comptador > 1 && comptador < 5) ? `El text conté 2 i 4 cops la lletra ${lletra}` : `El text no conté entre 2 i 4 cops la lletra ${lletra}`)
}
/* Demanar un text i un número a l'usuari i mostrar el text sense el caràcter en la posició del número */

function eliminaLletra() {
    console.clear();
    let text = prompt("Introdueix un text");
    let posicio = parseInt(prompt("Introdueix la posició del caràcter a eliminar"));
    posicio = posicio > text.length ? text.length - 1 : posicio;
    let nouText = "";
    for (let i=0; i<text.length; i++){
        if (i != posicio) { nouText+= text.charAt(i); }
    }
    document.write(`Abans: ${text} <br> Ara: ${nouText}`);
}
/* Demanar un text a l'usuari i mostrar: 
    1) Majúscules: ${textEnMajuscules}
    2) Minúscules: ${textEnMinuscules}
    3) longitud: { ... }
    4) Nombre de paraules: { ... } utilitzar .split
    5) Les vocals són: { ... }
    6) El número de vocals és: { ... }
    7) El text reduïnt lletra a lletra de 0 a lenght-1
*/
function procesaText() {
    let text = prompt("Introdueix un text a processar");
    document.write(`Majúscules: ${text.toUpperCase()}<br>`);
    document.write(`Minúcules: ${text.toLowerCase()}<br>`);
    document.write(`La longitud del text és: ${text.length}<br>`); // longitud

    let paraules = text.split(" ");
    document.write(`Nombre de paraules: ${paraules.length}<br>`); // nombre de paraules
    let vocals = /["aàáäeèéëiíìïoòóöuùúü"]/gi // amb regexp
    // let vocals = "aàáäeèéëiíìïoòóöuùúü";
    // let nomesVocals = "";
    // let comptador = 0;
    // for (let i=0; i<text.length; i++) {
    //      for (let j=0; j<vocals.length; j++) {
    //          if (text.charAt(i).toLowerCase() == vocals.charAt(j)) { nomesVocals += text.charAt(i); comptador++;}
    //      }
    // }

    document.write(`Les vocals són: ${text.match(vocals)} <br>`); // les vocals són
    
    document.write(`El nombre total de vocals és: ${text.match(vocals).length}<br>`); // numero de vocals (total?)
    while (text.length > 0) {
        document.write(`${text}<br>`);
        text = text.substring(1);
    } // text reduint
}
/* Demanar una hora a l'usuari en format hh:mm -> és el dia de cap d'any i volem saber quants minuts queden per a mitjanit 00:00 
    Si introdueix  00:00 -> "any nou"
    Si introdueix  23:45 -> 15
    Si introdueix  21:30 -> 150
    Si introdueix  00:01 -> 1439
    Calculem en minuts
*/
function quantPerAnyNou() {
    console.clear();
    let hora = prompt("Introdueix una hora").split(":");
    let hores = parseInt(hora[0])*60;
    let minuts = parseInt(hora[1]);
    let total = (24*60)-(hores+minuts);
    console.log(total == (24*60) ? "Any nou" : total);
}
