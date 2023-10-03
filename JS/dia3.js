function calculaPotencia() { // funció per calcular la potencia d'un nombre
    console.clear();
    let base = prompt("Introdueix una base");
    let potencia = prompt("Introdueix una potencia");
    console.time("Temporitzador amb MATH");
    let resultat = Math.pow(base, potencia);
    console.timeEnd("Temporitzador amb MATH");
    console.log("Calculat amb Math -> "+base+" elevat a "+potencia+" és "+resultat);
    let resultat2 = 1;
    console.time("Temporitzador amb FOR");
    for (let i=1; i < potencia; i++) {
        resultat2 = resultat2 * base;
    }
    if (potencia < 0) {
        for (let i=1; i > potencia; i--) {
            resultat2 = resultat2 / base;
        }
    }
    console.timeEnd("Temporitzador amb FOR");
    console.log("Calculat amb for -> "+base+" elevat a "+potencia+" és "+resultat2);
}

function calculaTresNombres() { //versió 1 per calcular diferents problemes matemàtics
    console.clear();
    let a = parseInt(prompt("Introdueix el primer nombre"));
    let b = parseInt(prompt("Introdueix el segon nombre"));
    let c = parseInt(prompt("Introdueix el tercer nombre"));
    let nombres = [a, b, c];
    nombres = nombres.sort(function(a,b){return a-b;});
    console.log("La mitja de "+nombres[0]+", "+nombres[1]+", "+nombres[2]+" és -> "+((nombres[0]+nombres[1]+nombres[2])/nombres.length));
    console.log("La mitjana de "+nombres[0]+", "+nombres[1]+", "+nombres[2]+" és -> "+nombres[Math.floor((nombres.length/2))]);
    console.log("El major és -> "+nombres[nombres.length-1]);
    console.log("El menor és -> "+nombres[0]);
}

function calculaTresNombres2() { //versió 2 per calcular diferents problemes matemàtics
    console.clear();
    let nombres =[];
    let total = 0;
    let quantity = parseInt(prompt("Introdueix la quantitat de nombres"));
    for (let i=0; i<quantity; i++) {
        nombres[i] = parseInt(prompt("Introdueix un nombre"));
    }
    for (let i=0; i<nombres.length; i++) {
        total += nombres[i];
    }
    nombres = nombres.sort(function(a,b){return a-b;});
    let mitja = total/nombres.length;
    let mitjana = nombres[Math.floor((nombres.length/2))];
    console.log("La mitja és "+mitja);
    console.log("La mitjana és "+mitjana);
    console.log("El major és -> "+nombres[nombres.length-1]);
    console.log("El menor és -> "+nombres[0]);
}