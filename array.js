function frankenSplice(arr1, arr2, n) {
    var array1 = [...arr1];    
    var array2 = [];
    for (var x = 0; x < arr2.length; x++){
        if (x != n){
            array2.push(arr2[x]);
            
        }else {
            for(var y = 0; y < array1.length; y++){
                array2.push(array1[y]);
            }
            array2.push(arr2[n]);
        }
    }
    console.log(arr1);
    console.log(arr2);
    return array2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
