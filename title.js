function titleCase(str) {

    var strSeparator = str.toLowerCase().split(" ");

    for (var x = 0; x < strSeparator.length; x++){
        strSeparator[x] = strSeparator[x].split('');
        strSeparator[x][0] = strSeparator[x][0].toUpperCase();
        strSeparator[x] = strSeparator[x].join("");
    }

    return strSeparator.join(" ");
}
  
console.log(titleCase("I'm a little tea pot"));