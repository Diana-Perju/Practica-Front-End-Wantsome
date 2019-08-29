function serverRequest(ms) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
        reject();
      }, ms);
    });
    promise.then(function() {
      console.log("Ruleaza dupa " + ms / 1000 + "secunde");
    });
    return promise;
  }
  
  serverRequest(3000);
  serverRequest(1000);