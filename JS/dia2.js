/*
    Ha de mostrar:
        Taula del $nombre x ... = $resultat
*/
// versió 1
function demanaDades() {
    let x = prompt("Introdueix un nombre");
    if (x < 0 || x >10) {
        console.error(`${x} está fora de rang. Ha de ser entre 0 i 10.`);
        demanaDades();
    } else {
        console.log(`Taula del ${x}`)
        for (let i=1; i<=10; i++) {
            let y = x * i;
            console.log(`${x} x ${i} = ${y}`);
        }
    }
    
}

// versió 2 amb while true + break
function demanaDades2() {
    let x = prompt("Introdueix un nombre");
    while (true) {
        if (x >= 0 && x <= 10) { break; }
        console.error(`${x} está fora de rang. Ha de ser entre 0 i 10.`);
        x = prompt("Introdueix un nombre");
    }
    console.clear();
    console.log(`Taula del ${x}`)
    for (let i=1; i<=10; i++) {
        let y = x * i;
        console.log(`${x} x ${i} = ${y}`);
    }
}
// funció per definir la sèrie de fibonachi
// ªn = ªn-1 + ªn-2
/* definim dues variables la cual sumarà el resultat final al anterior
   per exemple, 1+1 = 2 el següent serà 1+2=3 i el següent serà 2+3=5 ...
   · necessitarem 3 variables
        · variable a
        · variable b
        · variable resultat
   · un input que mostrarà el nombre de termes que s'indiqui
*/

function mostraFibonacci() {
    let x = document.getElementById("fibo").value;
    let valor1 = 0;
    let valor2 = 0;
    let resultat = 1;
    console.clear();
    if (x < 1) {
        console.error(`El valor introduït no és vàlid. Introdueix un nombre > 0.`);
    }
    for (i=1; i<=x; i++) { 
        console.log(`fibo[${i}]=${resultat}`);
        valor2 = resultat;
        resultat = valor1+valor2;
        valor1 = valor2;
    }
}
    