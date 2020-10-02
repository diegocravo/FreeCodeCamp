function truncateString(str, num) {
    var strIn = str.split("");
    var strOut = [];

    if (strIn.length <= num){
        return str;
    }else {
        for (var x = 0; x < num; x++){
            strOut.push(strIn[x]);
        }
        return strOut.join("") + "...";
    }
}

console.log(truncateString("Diego Rodrigues Cravo Teixeira", 5));