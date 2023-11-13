function doSomething(callback) {
    // Doing some work here
  
    // When the work is done, call the callback function
    callback();
  }
  
  function afterSomethingIsDone() {
    console.log("After something is done!");
  }
  // Passing the function "afterSomethingIsDone" as a callback
  doSomething(afterSomethingIsDone);
//   doSomething(()=>{
//        console.log("After something is done!");
//   })