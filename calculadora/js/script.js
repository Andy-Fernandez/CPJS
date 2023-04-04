const symbol = document.querySelector('.symbol');
const result = document.querySelector('.result');

// operation.setAttribute('value', '5+5');

function btnOnClickSymbol(symbol) {
  console.log('Symbol button clicked');
  result.innerText += symbol;
}
function btnOnClickXd() {
  result.innerText = "0"
  console.log('AC button clicked');
}
function btnOnClickNumber(number) {
  console.log('Number button clicked');
  result.innerText += number;
}