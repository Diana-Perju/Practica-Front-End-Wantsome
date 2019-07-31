var bam = {
    deposit: "deposit",
    withdraw: "withdraw",
    showDetails: "show"
  }
  
  function createObj(protoObj) {
    function solution1() {
      solution1.prototype = protoObj }
      return new solution1();
    }
  
  var acc = createObj(bam);
  console.log(acc);
  console.log(Object.getPrototypeOf(acc));
  
  /*
  var bam = {
    deposit: "deposit",
    withdraw: "withdraw",
    showDetails: "show"
  }
  
  var acc = Object.create(bam);
  console.log(acc.withdraw)
  console.log(acc);
  console.log(Object.getPrototypeOf(acc));
  
  
  /*
  //using class
  class BankAccount {
    constructor(name, initialBalance) {
      this.name = name;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw (amount) {
      this.balance -= amount;
    }
  
    showBalance () {
      console.log(`Account name: ${this.name} \n ${this.balance} de RON`);
    }
  
    static getBankBalance() {
      console.log("Ramai prost!!\nBanca are ratele cele mai bune!!!!")
    }
  }
  
  const acc = new BankAccount("Wantsome", 20000);
   acc.deposit(2000);
   BankAccount.getBankBalance();
   acc.showBalance();
  
   
  
  /*
  //get Prototype Of
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function() {
    console.log(this.name + " is eating");
  }
  
  const newObj = new Animal("Dog");
  console.log(Object.getPrototypeOf(newObj));
  
  /*
  //prototypes
  function BankAccount(name, initialBalance) {
    
    this.name = name;
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function deposit(amount) {
    this.balance += amount;
  }
  
  BankAccount.prototype.withdraw = function withdraw(amount) {
    this.balance -= amount;
  }
  
  BankAccount.prototype.showBalance = function showBalance() {
    console.log(this.name, this.balance);
  }
  
  const account = new BankAccount("Wantsome", 2000);
   account.showDetails();
   account.deposit(200);
   account.showDetails();
  
  
  /*
  
  function BankAccount(name, initialBalance) {
    
    this.name = name;
    this.balance = initialBalance;
  
    this.withdraw = function(amount) {
      return this.balance -= amount;
    }
  
    this.deposit = function(amount) {
      return this.balance += amount;
    }
  
  this.showDetails = function showDetails() {
    console.log(this.name, this.balance);
    }
   }
  
   const account = new BankAccount("Wantsome", 2000);
   //account.showDetails();
   //account.deposit(200);
   //account.showDetails();
  
   BankAccount.prototype.deposit = function deposit(amount) {
     this.balance += amount;
   }
  
  /*
  function myFn() {
    console.log(myFn.prototype)
  }
  
  
  /*
  //object create
  var bam = {
    deposit: "deposit",
    withdraw: "withdraw",
    showDetails: "show"
  }
  
  var acc = Object.create(bam);
  console.log(acc.withdraw)
  
  
  /*
  //1st met - create object
  var bankAccountMet = {
    deposit(amount) {
      this.balance += amount;
    }
    }
  
  //or use var account 
  
  function BankAccount(name, initialBalance) 
  var account = {}
  account.name =  name;
  
  /*function BankAccount(name, initialBalance) {
    
    this.name = name;
    this.balance = initialBalance;
  
    this.withdraw = function(amount) {
      return this.balance -= amount;
    }
  
    this.deposit = function(amount) {
      return this.balance += amount;
    }
  
  this.showDetails = function showDetails() {
    console.log(this.name, this.balance);
    }
   }
  
   const account = new BankAccount("Wantsome", 2000);
   account.showDetails();
   account.deposit(200);
   account.showDetails();
  
  /*var obj = {
    fn: () => { return () => console.log(this)}
  }
  
  obj.fn()
  
  
  /*var car = {
    name: 'Tesla',
    model: "Model 4",
    showCar: function() {
      console.log(this.name + " " + this.model);
    },
    showCar2: () => console.log(this.name + " " + this.model)
  };
  
  car.showCar();
*/  