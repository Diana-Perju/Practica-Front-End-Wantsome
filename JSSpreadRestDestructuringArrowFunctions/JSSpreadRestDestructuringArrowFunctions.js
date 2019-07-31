
//exercitiu destructurare
var matrice = {
neo: "Keanu Reeves",
morpheus: "Laurence Fishbourne",
trinity: "Carrie Moss",
details: {
year: 1999,
rating: 8.7,
}
};

var releaseYear = matrice.details.year;
var morpheus = matrice.morpheus;
console.log(morpheus, releaseYear);

var neo = matrice.neo;
var { ...rest } = matrice;

var {morpheus, details:{year:releaseYear}} = matrice;
console.log(neo[0]);

/*
//arrow function
var car = {
    name: 'Tesla',
    model: "Model 4",
    showCar: function() {
      console.log(this.name + " " + this.model);
    },
    showCar2: () => console.log(this.name + " " + this.model)
  };
  
  car.showCar();
  
  
  
  /*
  //rest operator
  var obj2 = {
    firstName: "Dana",
    lastName: "M",
    height: 180,
    kg: 70,
    age: 200,
  };
  
  var { firstName, age, ...mustar } = obj2;
  
  console.log(firstName, age. rest);
  
  console.log(Math.min(3, 1, 7, 8, 0, -5, 10));
  console.log(Math.min(1, -5));
  
  function myMin(...rest) {
  console.log(rest);
  }
  
  
  //function fn(p1, p2, p3, p5, p6) {}
  
  //fn(p1, p2, ...rest) {}
  
  /*function useCeva(stare = 0) {
  var state = stare;
  
  return [
    state,
    function(param) {
      state = param;
      return state;
     
    },
  ];
  }
  
  var [stareaMea, whatever] = useCeva(2000);
  
  stareaMea(2);
  whatever(1);
  console.log(stareaMea, whatever);
  
  
  /*var arr1 = [1, 4, 6];
  var arr2 = [2, 3, 8];
   
   
   var [a = 0, b = 2] = arr1;
   console.log(a, b);
  
   var [ , , b = 0] = arr1;//returneaza al 3-lea element
  console.log(b);
   
   /* 
   //destructurare obiecte
   var obj1 = {
     name: "Sarcau",
     ade: 20,
   };
  
   var obj2 = {
     name = "Dana",
     lastName: "M",
     age: 26,
     height: 180,
     kg: 70,
   };
  
   var age = obj2.age;
   var kg = obj2.kg;
   var lastName = obj2.lastName;
  
   var { age, kg, lastName, mustar = "galben" } = obj2;
   console.log(age, kg, lastName, mustar);
  
   var arr1 = [1, 4, 6];
   var arr2 = [2, 3, 8];
  
   console.log(arr1.concat(arr2));
   console.log([].concat(arr1,arr2));
   console.log({...arr1, ...arr2});
  
  console.log({...obj1, ...obj2});
  console.log(Object.assign({}, obj1, obj2));
  console.log(obj1);
  
   /*function ATM(name, balance) {
  
    this.name = name,
    this.balance = balance,
  
    this.withdraw = function(amount) {
      return this.balance -= amount;
    }
  
    this.deposit = function(amount) {
      return this.balance += amount;
    }
  
  this.showDetails = function() {
    console.log(this.name, this.balance);
    }
   }
  
   var account1 = new ATM("Ana are", 2000);
   account1.withdraw(200);
   account1.showDetails();
   account1.deposit(400);
   account1.showDetails()
  
   /*var account2 = {
  
    name: "Costel",
    balance: 300,
   }
  
   console.log(account1.withdraw.bind(account2)(300));
   account1.showDetails.bind(account2)();
   
   account1.withdraw.call(account2,200);
   account1.withdraw.apply(account2,[200]);
  
   */
  
  