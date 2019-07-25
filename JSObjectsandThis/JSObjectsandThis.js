   var calculator = {

    a: 20,
    b: 10,
    
    
    read: function() {
      this.a,
      this.b 
      
    },
    
    sum: function() {
      return this.a + this.b;
    },
    
    diff: function() {
      return this.a - this.b;
    },
    
    mult: function() {
    return this.a * this.b;
    },
    
    divide: function() {
    return this.a / this.b;
    },
    
    }
    
  
    console.log(calculator.read.bind());
    
    console.log(calculator.sum());
    console.log(calculator.diff());
    console.log(calculator.mult());
    console.log(calculator.divide());
   
    