function confirmEnding(str, target) {

    var strArr = str.split("");
    var targetArr = target.split("");

    var strIndex = strArr.length;
    var targetIndex = targetArr.length;
    var index = strIndex - targetIndex;

    var confirm = true;

    for (var x = 0; x < targetIndex; x++){
        
        if(targetArr[x] != strArr[x + index]){
            confirm = false;
        }
    }

    return confirm;
}
  
console.log(confirmEnding("Open sesame", "same1"));
  