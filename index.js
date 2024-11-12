// var balance = 1000; 

// function checkPin() {
//   var pin = document.getElementById("pin").value;
//   var message = document.getElementById("message");
  

//   if (pin === "1234") { 
//     message.textContent = "PIN correct. Choose an option.";
    
//   } else {
//     message.textContent = "Incorrect PIN. Try again.";
//   }
// }

// function deposit() {
//   var amount = prompt("Enter amount to deposit:");
  
//   balance += parseInt(amount);
  
//   document.getElementById("message").textContent = `Deposit successful!Your New balance is: $` + balance};
//   var depositImage = document.getElementById("depositImage");
//   depositImage.style.display = "none";

// function withdraw() {
//   var amount = prompt("Enter amount to withdraw:");
//   if (amount <= balance) {
//     balance -= amount;
//     document.getElementById("message").textContent = `Withdrawal successful! Your Remaining balance is: $`+ balance;
//   } else {
//     document.getElementById("message").textContent = "Insufficient balance!";
//   }
// }

// function checkBalance() {
//   document.getElementById("message").textContent = `Your current balance is: $` + balance;
// }
var balance = 1000; // Initial balance

function checkPin() {
  var pin = document.getElementById("pin").value;
  var message = document.getElementById("message");

  if (pin === "1234") {
    message.textContent = "PIN correct. Choose an option.";
  } else {
    message.textContent = "Incorrect PIN. Try again.";
  }
}

function deposit() {
  var amount = parseInt(prompt("Enter amount to deposit:"));
  var message = document.getElementById("message");
  var depositImage = document.getElementById("depositImage");
var atmImage = document.getElementById("atmImage")
atmImage.style.display = "none";
  if (amount > 0) {
    balance += amount;
    message.textContent = "Deposit successful! New balance: $" + balance;

    // Show the image
    depositImage.style.display = "block";
  } else {
    message.textContent = "Please enter a valid amount to deposit.";

    // Hide the image if deposit is not successful
    depositImage.style.display = "none";
  }
}

function withdraw() {
  var amount = parseInt(prompt("Enter amount to withdraw:"));
  var message = document.getElementById("message");
  var depositImage = document.getElementById("depositImage");
  var withdraw = document.getElementById("withdraw");
  
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    message.textContent = "Withdrawal successful! Remaining balance: $" + balance;
withdraw.style.display = "block"
    // Hide the image after withdrawal
    depositImage.style.display = "none";
  } else if (amount > balance) {
    message.textContent = "Insufficient balance!";
  } else {
    message.textContent = "Please enter a valid amount to withdraw.";
  }
}

function checkBalance() {
  document.getElementById("message").textContent = "Your current balance is $" + balance;
}
