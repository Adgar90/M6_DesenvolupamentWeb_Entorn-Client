/* A partir de la piràmide anterior, crear una taula html que dibuixe un romb com aquest */
function creaRomb() {
    // files = (cols/2) +1
    let columnes = parseInt(prompt("Introdueix nº de columnes"));
    let fils = (columnes%2 == 0) ? columnes+1 : columnes; //col·laboració Oscar Perez
    let table = document.createElement("table");
    let vermell = 1;
        for (let i=0; i<fils; i++) {
            // creació de la fila
            let row = document.createElement("tr");
            let blancs = (columnes-vermell)/2;
            for (let j=0; j<blancs; j++) {
                insereixElement(row, "white", "td");
            }
            for (let j=0; j<vermell; j++) {
                insereixElement(row, "red", "td");
            }
            for (let j=0; j<blancs; j++) {
                insereixElement(row, "white", "td");
            }
            table.appendChild(row);
            if (i < Math.floor(fils/2)) { 
                vermell+=2; 
            } else {
                vermell-=2;
            }
        }
        document.body.appendChild(table);
}

//function by gemma
function insereixElement(element, color, tag) {
    let child = document.createElement(tag);
    child.style.backgroundColor = color;
    element.appendChild(child);
}

/* Demanar a l'usuari un nom d'arxiu i pintar por consola la seva extensió */

function mostraExtensióArxiu() {
    console.clear();
    let arxiu = prompt("Introdueix nom de l'arxiu (amb extensió)")
    let extensio = arxiu.split(".");
    console.log(extensio[extensio.length-1]);
    console.log(extensio.pop()); // .pop mostra l'últim element de l'array
}

/* Demanar a l'usuari una frase -> mostrar si la frase té el mateix número de 'a' que de 'b'*/

function compteLletres() {
    console.clear();
    let text = prompt("Introdueix un text");
    let quantesA = 0;
    let quantesB = 0;
    for (let i=0; i<text.length; i++) {
        if (text.charAt(i) == 'a' || text.charAt(i) == 'A') { quantesA++; }
        if (text.charAt(i) == 'b' || text.charAt(i) == 'B') { quantesB++; }
    }
    console.log(`En el text hi ha ${quantesA} A i ${quantesB} B`);
}