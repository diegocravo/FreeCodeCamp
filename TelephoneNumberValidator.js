function telephoneCheck(str) {

    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    var inputNumber = str.split("");

    var inFormat = false;

    if (inputNumber.length == 13){
        if (inputNumber[0] == "(" && inputNumber[4] == ")" && inputNumber[8] == "-"){
            inFormat = true;
        }
    }else if (inputNumber.length == 12){
        if ( (inputNumber[3] == " " && inputNumber[7] == " ") || (inputNumber[3] == "-" && inputNumber[7] == "-") ){
            inFormat = true;
        }
    }else if (inputNumber.length == 14){
        if ( (inputNumber[0] == "(" && inputNumber[4] == ")" && inputNumber[5] == " " && inputNumber[9] == "-") 
        || (inputNumber[1] == " " && inputNumber[5] == " " && inputNumber[9] == " ") 
        || (inputNumber[1] == " " && inputNumber[5] == "-" && inputNumber[9] == "-") 
        || (inputNumber[1] == "(" && inputNumber[5] == ")" && inputNumber[9] == "-") ){
            inFormat = true;
        }
    }else if (inputNumber.length == 16){
        if (inputNumber[1] == " " && inputNumber[2] == "(" && inputNumber[6] == ")" && inputNumber[7] == " " && inputNumber[11] == "-"){
            inFormat = true;
        }
    }else if (inputNumber.length == 10){
        var everythingOk = [];
        for (var z = 0; z < str.length; z++){
            if (numbers.includes(inputNumber[z])){
                everythingOk.push(inputNumber[z]);
            }
        }
        if (everythingOk.length == 10){
            inFormat = true;
        }
    }

    var finalNumber = [];

    for (var x = 0; x < str.length; x++){
        if (numbers.includes(inputNumber[x])){
            finalNumber.push(inputNumber[x]);
        }
    }

    if (inFormat == false){
        return false;
    }else if (finalNumber.length == 11){
        if (finalNumber[0] == 1){
            return true;
        }else {
            return false;
        }
    } else if (finalNumber.length == 10){
        return true;
    }else {
        return false;
    }
  }
  
console.log(telephoneCheck("(555)5(55?)-5555"));



/*
555-555-5555 12 OK
(555)555-5555 13 OK
(555) 555-5555 14 OK
555 555 5555 12 OK 
5555555555 10
1 555 555 5555 14 OK

1 555-555-5555 14 OK
1 (555) 555-5555 16
1(555)555-5555 14
*/