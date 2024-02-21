function getInputField(inputId) {
  const inputField = document.querySelector(inputId);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = '';
  return inputFieldValue;
}

function elementContainer(ele) {
  const element = document.querySelector(ele);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setTextElementValue(ele, newDepositAmmount) {
  const textEement = document.querySelector(ele);
  textEement.innerText = newDepositAmmount;
}
