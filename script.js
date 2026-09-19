let budget = 0;

let budgetForm = document.getElementById("budgetForm");
let budgetInput = document.getElementById("budgetInput");
let budgetResult = document.getElementById("budgetResult");

budgetForm.addEventListener("submit", function (e) {
  e.preventDefault();

  budget = Number(budgetInput.value);

  budgetResult.innerText = "Your Budget is ₹" + budget;
});

let expenseForm = document.getElementById("expenseForm");
let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");

let expenseResult = document.getElementById("expenseResult");
let remainingResult = document.getElementById("remainingResult");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let expense = expenseName.value;
  let amount = Number(expenseAmount.value);

  expenseResult.innerText = "Your Expense: " + expense + " ₹" + amount;

  let remaining = budget - amount;

  remainingResult.innerText = "Remaining Budget: ₹" + remaining;
});
