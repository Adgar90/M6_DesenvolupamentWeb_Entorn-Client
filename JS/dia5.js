/* 
    Conversor de temperatura -> Ens permet convertir de Farenheit a Celsius o a l'inrevés.
        · Formats: C -> Celsius , F -> Farenheit , altre lletra dona error per format invàlid.
        · Graus: integer
*/
function conversorTemperatura() {
    console.clear();
    let tipus = prompt("Escriu 'C' o 'F' per indicar el format");
    let temperatura = parseInt(prompt("Introdueix la temperatura"));

    if (tipus == 'C') {
        let farenheit = (9/5)*temperatura+32;
        console.log(`${temperatura} graus Celsius convertit a Farenheit són ${farenheit}`)
    } else if (tipus == 'F') {
        let celsius = temperatura-32/(9/5);
        console.log(`${temperatura} graus Farenheit convertit a Celsius són ${farenheit}`)
    } else {
        console.error('No has indicat un format vàlid per convertir.')
    }
}

/*
    Conversor d'unitats -> ens permet convertir un número en binari, octal i hexadecimal i el retorna
        · Funcions:
            -> convertirEnBinari(num): converteix en binari el número passat per paràmetres
            -> convertirEnOctal(num): converteix en octal el número passat per paràmetres
            -> convertirEnHexadecimal(num): converteix en hexadecimal passat per paràmetres
            -> conversor(num, base): converteix en binari/octal/hexadecimal -> en aquest cas simplificació dels anteriors, ja què rep el número i la base
*/
function conversorUnitats() {
    console.clear();
    let numToConvert = parseInt(prompt("Introdueix un número per mostrar en binari, octal i hexadecimal"));
    console.log(`El número ${numToConvert} en binari és ${conversor(numToConvert, 2)}`);
    console.log(`El número ${numToConvert} en octal és ${conversor(numToConvert, 8)}`);
    console.log(`El número ${numToConvert} en hexadecimal és ${conversor(numToConvert, 16)}`);
}
function convertirEnBinari(num) { // dividim per 2 fins que cocient dona 0 i surtim de bucle, concatenar els valors de forma inversa
    let resultat = "";
    while (num > 0) {
        resultat = String(num%2)+resultat; // concatenació del mòdul (número/base) en string de forma inversa
        num = Math.floor(num/2); // divisió sencera
    }
    return resultat;
}
function convertirEnOctal(num) { // dividir per 8 fins que cocient dona 0 i surtim de bucle, concatenar els valors de forma inversa
    let resultat = "";
    while (num > 0) {
        resultat = String(num%8)+resultat; // concatenació del mòdul (número/base) en string de forma inversa
        num = Math.floor(num/8); // divisió sencera
    }
    return resultat;
}
function convertirEnHexadecimal(num) { // numeració 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F -> funció que rep un número i el retorna en hexadecimal
    let valors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let resultat = "";
    while (num > 0) {
        resultat = valors[num%16]+resultat; // concatenació inversa dels valors
        num = Math.floor(num/16); // divisió sencera
    }
    return resultat;
}

function conversor(num, base) { // funció que rep un número i una base i retorna el número en binari, octal o hexadecimal segons la base (2, 8 o 16)
    let valors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let resultat = "";
    while (num > 0) {
        resultat = valors[num%base]+resultat; // concatenació inversa dels valors
        num = Math.floor(num/base); // divisió sencera
    }
    return resultat;
}