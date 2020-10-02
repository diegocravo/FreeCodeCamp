function locateWord(str, ending1, ending2){

    var result = [];
    var strSplit1 = str.replace(".", " ").toUpperCase();
    var split2 = strSplit1.replace('“', " ");
    var strSplit = split2.split(" ");

    for (var x = 0; x < strSplit.length; x++){
        var n = strSplit[x].endsWith(ending1); 
        var m = strSplit[x].endsWith(ending2);
        if (n || m){
            result.push(strSplit[x]);
        }
    }
    
    return "Quantidade de Resultados: " + result.length + "\nResultados: " + result;
}

console.log(locateWord('Perseus was the son of the Greek god Zeus and the mortal woman Danae. One day the king of the island where Perseus lived asked him if he would help get rid of the terrible monster Medusa, who was terrorizing his kingdom. Medusa had writhing, twisting snakes for hair, and a single glance from her could turn a human into stone. Perseus agreed to help, but first he asked for help from the gods. Athena gave him a shiny shield. Hermes gave him shoes with wings. “Only fly over her when she is sleeping,” he told Perseus, “and never look directly at the snakes on her head.”', 'ED', 'LY'));