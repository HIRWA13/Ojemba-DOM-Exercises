// 1. get first input value from the first  input field
// 2. get the second input from the second input field
// 3. make the inputs to accept only numbers
// 4.compare the entered values and display the result according to the comparizon
// 5.display the result in the result field
// 6.the comparizon should be done dynamcally as soon as the user enters the values

// 1. get first input value from the first  input field
const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
// 2.get the second input from the second input field
const result = document.querySelector("#result");
// 3. make the inputs to 
firstInput.addEventListener("input", function () {
    if (isNaN(firstInput.value)) {
      firstInput.value = 0;
    }
});
secondInput.addEventListener("input", function () {
    if (isNaN(secondInput.value)) {
        secondInput.value = 0;
    }
});
// 4.compare the entered values and display the result according to the comparizon
// 5.display the result in the result field
// 6.the comparizon should be done dynamcally as soon as the user enters the values
result.style.color = "red";
firstInput.addEventListener("input", function () {
    if (firstInput.value > secondInput.value) {
        result.textContent = "First Number is greater than the second number";
    } else if (firstInput.value < secondInput.value) {
        result.textContent = "Second Number is larger than the first number";
    } else {
        result.textContent = "the numbers you entered are equal";
    }
});

secondInput.addEventListener("input", function () {
    if (firstInput.value > secondInput.value) {
        result.textContent = "First Number is greater than the second number";
    } else if (firstInput.value < secondInput.value) {
        result.textContent = "Second Number is larger than the first number";
    } else {
        result.textContent = "the numbers you entered are equal";
    }
});