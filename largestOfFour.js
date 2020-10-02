function largestOfFour(arr) {

    var finalArr = [];
    for (var x = 0; x < arr.length; x++){
        var smallestNumber = -9999999999999;
        for (var y = 0; y < arr[x].length; y++){
            if(arr[x][y] > smallestNumber){
                smallestNumber = arr[x][y];
            }
        }
        finalArr.push(smallestNumber);
    }
    return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  