/* Generar (Math.random) un nº entre [1-100] i es tracta d'endevinar-lo.
   Cada intent es dirà { major o menor } segons si el intent sigui
   + gran o + petit.
   Si s'introdueix un valor invàlid es mostrarà "invàlid" i es comptarà
   l'intent. Si introdueix un 0 -> "Game over"
   Resultat -> "L'has endevinat en 'n' intents"
*/

function endevinaNumero() {
    console.clear();
    let numero = Math.floor(Math.random(1, 100)*100);
    console.log(numero);
    let intents = 0;
    while (true) {
        let proposta = parseInt(prompt("Introdueix un número entre el 1 i el 100"));
        intents++;
        if (proposta == 0) {
            console.log("Game over");
            break;
        }
        if (proposta < 0 || proposta > 100 || !Number.isInteger(proposta)) {
            console.log("Invàlid");
            continue;
        }
        if (numero < proposta) {
            console.log("Menor");
        } else if (numero > proposta) {
            console.log("Major");
        } else {
            console.log(`L'has edevinat en ${intents} intents`);
            break;
        }
    }
}

/* Demanar un numero de { 2000 a 2050 } i dir quin és el 1er any del rang comença en dimecres */

function anyComençaEnDimecres() {
    let any1 = parseInt(prompt("Introdueix un any"));
    let any2 = parseInt(prompt("Introdueix un any"));
    if (any1 > any2) { console.error("El rang no pot ser invers"); }
    while (any1 <= any2) {
        let any = new Date(`${any1}`);
        if (any.getDay() == 3) { 
            console.log(`L'any ${any1} comença en dimecres`); 
            return;
        }
        any1++;
    }
    console.log("Cap any comença en dimecres");
}

/* Demanar una paraula i dir si és pentavocàlica (té les 5 vocals) 
    Ex -> murciélago -> Si
          albaricoque -> si
          mundano -> no
*/

function esPentaVocalica() {
    let a = /["aàáä"]/gi;
    let e = /["eèéë"]/gi;
    let i = /["iìíï"]/gi;
    let o = /["oòóö"]/gi;
    let u = /["uùúü"]/gi;
    let vocals = [a, e, i, o, u];
    let paraula = prompt("Introdueix la paraula");
    for (let i=0; i<vocals.length; i++) {
        if (!paraula.match(vocals[i])) { 
            document.write(`La paraula ${paraula} no és pentavocàlica.`);
            return;
        }
    }
    document.write(`La paraula ${paraula} si és pentavocàlica.`);
}