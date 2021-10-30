window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  console.log('getCurrentUIValues');
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  console.log('setup');
  const values = {amount: 1000, years: 2, rate: 4};
  values.amount = document.getElementById("loan-amount").value;
  values.years = document.getElementById('loan-years').value;
  values.rate = document.getElementById('loan-rate').value;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
  console.log('update',getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const n = -Math.abs(values.years * 12)
  const i = (values.rate / 100) / 12;
  const calculated = (values.amount * i / (1 - Math.pow((1 + i), n))).toFixed(2);
  console.log('calculated', calculated);
  return calculated;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = `$` + monthly;
  console.log('updateMonthly'
  );
}
