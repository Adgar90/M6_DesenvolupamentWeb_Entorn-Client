/* Demanar el nº de (files / columnes)  i crear una taula dinàmica html de la forma
    1.1 1.2 1.3 ...
    2.1 2.2 2.3 ...
    3.1
    .
    .
    .
    let t = document.createElement("table"); (table)
    let tr = document.createElement("tr"); (table row) afegir al t
    let td = document.createElement("td"); (table header) afegir al tr
    let txt = document.createTextNode(" ~ text ~ "); afegir al td

    td.appendChild(txt) -> appendChild serveix per inserir un element dins d'un altre

    document.body.appendChild(t) -> per inserir a la taula final
*/

function creaTaula() {
    let files = parseInt(prompt("Introdueix nº de files"));
    let columnes = parseInt(prompt("Introdueix nº de columnes"));

    let table = document.createElement("table");
    for (let i=1; i<=files; i++) {
        // creació de la fila
        let row = document.createElement("tr");
        for (let j=1; j<=columnes; j++) {
            //creació de la columna(cel·la)
            let col = document.createElement("td");
            //creació txt
            let txt = document.createTextNode(`${i}.${j}`);
            // inserir txt dins de col
            col.appendChild(txt);
            // inserir cel·la dins de la fila amb la que estem treballant
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
    
}

/*
    Crear una taula dinámica demanant ( files / cols ) amb les taules de multiplicar com aquesta
    1 2 3 4 5 . . .
    2 4 6 8
    3
    4
    5
    .
    .
    .
 */
    function creaTaulaMultiplicar() {
        let files = parseInt(prompt("Introdueix nº de files"));
        let columnes = parseInt(prompt("Introdueix nº de columnes"));
    
        let table = document.createElement("table");
        for (let i=1; i<=files; i++) {
            // creació de la fila
            let row = document.createElement("tr");
            for (let j=1; j<=columnes; j++) {
                //creació de la columna(cel·la)
                let col = document.createElement("td");
                //creació txt
                let txt = document.createTextNode(i*j);
                // inserir txt dins de col
                col.appendChild(txt);
                // inserir cel·la dins de la fila amb la que estem treballant
                row.appendChild(col);
            }
            table.appendChild(row);
        }
        document.body.appendChild(table);
        
    }

/*
    Demanar el nº de cols de la taula (= nº cel·les de color a la darrera fila) i pinteu una piràmide tal que
    així 
        1
       111
      11111
     1111111
 */

function creaPiramide() {
    // files = (cols/2) +1
    let columnes = parseInt(prompt("Introdueix nº de columnes"));
    let fils = Math.floor((columnes/2)+1);
    let table = document.createElement("table");
    let vermell = 1;
        for (let i=0; i<fils; i++) {
            // creació de la fila
            let row = document.createElement("tr");
            let blancs = (columnes-vermell)/2;
            for (let j=0; j<blancs; j++) {
                let col = document.createElement("td");
                row.appendChild(col);
            }
            for (let j=0; j<vermell; j++) {
                let col = document.createElement("td");
                col.style.backgroundColor = "red";
                row.appendChild(col);
            }
            for (let j=0; j<blancs; j++) {
                let col = document.createElement("td");
                row.appendChild(col);
            }
            table.appendChild(row);
            vermell+=2;
        }
        document.body.appendChild(table);
}