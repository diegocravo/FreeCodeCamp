function findLongestWordLength(str) {
    var strSplit = str.split(" ");
    var maior = "";
    for (var x = 0; x < strSplit.length; x++){
        if(strSplit[x].length > maior.length){
            maior = strSplit[x];
        }
    }
    return maior.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));