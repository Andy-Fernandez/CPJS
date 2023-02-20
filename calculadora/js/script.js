const operation = document.querySelector('.operation');
const result = document.querySelector('.result');
const seven = document.querySelector('.seven');



// result.innerText = "2"
console.log(seven.innerText + "hi");

// operation.setAttribute('value', '5+5');
function btnOnClickXd() {
  result.innerText = "0"
  console.log('AC button clicked');
}
function btnOnClickNumber(number) {
  console.log('Number button clicked');
  result.innerText += number;
}


