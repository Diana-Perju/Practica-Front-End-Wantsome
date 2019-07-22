
function createBankAcc(name, balance) {

    var name = name;
    var balance = balance;
    var account = account;
    var amount = amount;

    function withdraw(amount) {
        if (amount <= balance) { 
        balance -= amount; 
        } 
        else if (amount > balance) { 
        return console.log("Insufficient withdraw funds"); 
        } 
    } 
    function deposit(amount) {
        balance = balance + amount;
        return balance;
    }
    function showBalance() {
        console.log("Balance is " + balance);
    }
    
    function showName() {
        console.log("Name is " + name); 
    }

    function transfer(amount, account) {
       if (amount < balance) {
           balance -= amount;
           account.deposit(amount); 
           console.log("Transferred "+ amount);
        }
         else console.log("Insufficient transfer funds");
        
    }

    function showHistory(newBalance) {
        var date = date;
        var operation = operation;
        var transactions = transactions;
        var newBalance = [{amount, operation, date}]; {

            withdraw(amount) 
                newBalance.push({
                    amount: balance,
                    operation: "withdraw",
                    date: new Date(),
                    newBalance: balance,
                })


            deposit(amount) 
            newBalance.push({
                amount: balance,
                operation: "deposit", 
                date: new Date(),  
                })

            transfer(amount) 
            newBalance.push({
                amount: balance,
                operation: "transfer",
                date: new Date,  
                })
            }
        }
    

return {
    withdraw,
    deposit,
    showBalance,
    showName,
    transfer,
    showHistory,
}
}

var Diana = createBankAcc(Diana, 3000);
var Ana = createBankAcc(Ana, 600);
var Maria = createBankAcc(Maria, 500)

Diana.deposit(3000);
Diana.withdraw(50);
Diana.transfer(50, Maria);
Ana.transfer(200, Diana);
Maria.transfer(300, Ana);
Maria.showBalance();
Diana.showBalance();
Ana.showBalance();

Maria.showHistory(2);

