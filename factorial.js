function factorialize(num) {
    if (num <= 0){
        return 1;
    }else{
        return factorialize(num - 1) * (num) ;
    }
    return num;
    }
  
console.log(factorialize(10));