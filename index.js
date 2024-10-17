// TODO: this file! :)
const state = {
  numberBank: [],
  odds: [],
  evens: [],
};

const addNumberButton = document.querySelector("#addNumber");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");
const number = document.querySelector("#number");
const numberBankOutput = document.querySelector("#numberBankOutput");
const oddsOutput = document.querySelector("#oddsOutput");
const evensOutput = document.querySelector("#evensOutput");

addNumberButton.addEventListener("click", (e) => {
  e.preventDefault();
  state.numberBank.push(number.value);

  updateOutputs();
});

sortOneButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (state.numberBank.length > 0) {
    const shiftedNumber = state.numberBank.shift();
    if (shiftedNumber % 2 === 1) {
      state.odds.push(shiftedNumber);
    } else state.evens.push(shiftedNumber);
    updateOutputs();
  }
});

sortAllButton.addEventListener("click", (e) => {
  e.preventDefault();
  while (state.numberBank.length > 0) {
    const shiftedNumber = state.numberBank.shift();
    if (shiftedNumber % 2 === 1) {
      state.odds.push(shiftedNumber);
    } else state.evens.push(shiftedNumber);
  }
  updateOutputs();
});

function updateOutputs() {
  numberBankOutput.textContent = state.numberBank;
  oddsOutput.textContent = state.odds;
  evensOutput.textContent = state.evens;
}
