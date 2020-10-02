function findElement(arr, func) {
    var finalResult = [];

    for (var x = 0; x < arr.length; x++){
        var result = func(arr[x]);
        if(result){
            finalResult.push(arr[x]);
            break;
        }
    }
        
    return finalResult[0];
}

console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
