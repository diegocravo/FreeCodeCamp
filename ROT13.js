function rot13(str) {

    var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var letrasEquivalentes = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

    
    var letraDividida = str.toUpperCase().split("");

    var respostaFinal = [];

    for (var x = 0; x < letraDividida.length; x++){
        if (letras.includes(letraDividida[x]) == false){
            respostaFinal.push(letraDividida[x]);
        }else {
            for (var y = 0; y < letrasEquivalentes.length; y++){
                if (letrasEquivalentes[y] == letraDividida[x]){
                    respostaFinal.push(letras[y]);
                }
            }
        }
    }

    var codigo = respostaFinal.join("");
    return codigo;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

