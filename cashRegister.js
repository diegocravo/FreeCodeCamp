function checkCashRegister(price, cash, cid) {

    var preco = price;
    var dindin = cash;
    var finalResult = [];
    var result;
    var module;

    var result;
  
    var entryMoney = cid;
    var coins = [ 0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  
    if (price <= cash){
      for (var x = 8; x >=0; x--){
        if (dindin >= coins[x]){
            result = Math.floor(dindin / coins[0]);
            module = dindin%coins[0]
            dindin -= result
            finalResult.push(result * )
          result
        }
      }
    }
  
  
  
    var change;
    return change;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);