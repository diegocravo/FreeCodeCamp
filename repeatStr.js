function repeatStringNumTimes(str, num) {
    if (num <= 0){
        return "";
    }else if (num <= 1){
        return str
    }else{
        return repeatStringNumTimes(str, num - 1) + str;
    }
}

console.log(repeatStringNumTimes("abc", 3));