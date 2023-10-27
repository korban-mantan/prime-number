// For calling output element
const outputText = document.querySelector("#checker-output-text");
const generatedOutput = document.querySelector("#generated-output");

// Calling the form element of the respective function
const checkPrimeForm = document.querySelector("#check-prime-form");
const generatePrimeForm = document.querySelector("#generate-prime-form");

// Calling the link that user might click for our function
const gotoCheck = document.querySelector("#goto-prime-checker");
const gotoGenerate = document.querySelector("#goto-prime-generator");

// Content of each div
const checkerBody = document.querySelector("div.prime-checker");
const generatorBody = document.querySelector("div.prime-generator");

gotoGenerate.onclick = (event) => {
  event.preventDefault();
  generatorBody.classList.remove("hidden");
  generatorBody.classList.add("fade-in");
  checkerBody.classList.add("hidden");
};

gotoCheck.onclick = (event) => {
  event.preventDefault();
  checkerBody.classList.remove("hidden");
  checkerBody.classList.add("fade-in");
  generatorBody.classList.add("hidden");
};

checkPrimeForm.onsubmit = (event) => {
  event.preventDefault();
  const inputValue = Number(document.querySelector("#input-number").value);
  outputText.textContent = checkPrimeNumber(inputValue)
    ? inputValue + " is a prime number"
    : inputValue + " is not a prime number";
  console.log(inputValue + checkPrimeNumber(inputValue));
};
generatePrimeForm.onsubmit = (event) => {
  event.preventDefault();
  const startingNumber = Number(
    document.querySelector("#starting-number").value
  );
  const endNumber = Number(document.querySelector("#end-number").value);
  const generatedPrime = [];
  const warning = document.querySelector(".warning")
  if (endNumber < startingNumber) {
    warning.classList.remove("hidden")
  } else {
    warning.classList.add("hidden")
    for (let num = startingNumber; num <= endNumber; num++) {
      if (checkPrimeNumber(num)) {
        generatedPrime.push(num);
      }
    }

    generatedOutput.value = generatedPrime.join("\n");
  }
};

const checkPrimeNumber = (a) => {
  if (a == 2) {
    return true;
  } else if (a <= 1 || a % 2 == 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
};
