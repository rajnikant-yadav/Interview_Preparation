// Function to simulate asynchronous operations
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Method to perform addition
function sum(a, b) {
  return new Promise((resolve, reject) => {
    delay(1000) // Simulating an asynchronous operation
      .then(() => resolve(a + b))
      .catch(error => reject(error));
  });
}

// Method to perform multiplication
function multiply(a, b) {
  return new Promise((resolve, reject) => {
    delay(1500) // Simulating an asynchronous operation
      .then(() => resolve(a * b))
      .catch(error => reject(error));
  });
}

// Method to perform subtraction
function subtract(a, b) {
  return new Promise((resolve, reject) => {
    delay(2000) // Simulating an asynchronous operation
      .then(() => resolve(a - b))
      .catch(error => reject(error));
  });
}

// Using Promise.all to wait for all promises to resolve
Promise.all([
  sum(2, 3),
  multiply(4, 5),
  subtract(8, 3)
])
  .then(results => {
    // Summing up the results
    const finalResult = results.reduce((acc, current) => acc + current, 0);
    console.log("Final Result:", finalResult);
  })
  .catch(error => {
    console.error("Error:", error);
  });
