function palindrome(str) {

    var strUpper = str.toUpperCase();

    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    var inputString = str.toUpperCase().split("");
    var inString = [];
    var outputString = [];

    var outputIndex = str.length - 1;

    for (var x = 0; x < str.length; x ++){
        if (letters.includes(inputString[x]) || numbers.includes(inputString[x])){
            inString.push(inputString[x]);
            outputString[outputIndex] = (inputString[x]);
            outputIndex -= 1;
        }
    }

    console.log(outputString.join(""));
    console.log(inString.join(""));

    if (outputString.join("") === inString.join("")){
        return true;
    }else {
        return false;
    }
}
  
  
  
console.log(palindrome("1 eye for of 1 eye.11111"));