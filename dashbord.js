document.querySelector('.Deposit-btn').addEventListener('click', () => {
  const depositAmmount = getInputField('.input-field');
  const depositContainer = elementContainer('.deposit-container');
  const newdeposit = depositContainer + depositAmmount;
  setTextElementValue('.deposit-container', newdeposit);

  const previousBalance = elementContainer('.balance');
  const newBalance = previousBalance + depositAmmount;
  setTextElementValue('.balance', newBalance);
});

document.querySelector('.Withdraw-btn').addEventListener('click', () => {
  const withdrawAmmount = getInputField('.Withdraw-field');
  const withdrawContainer = elementContainer('.withdraw-container');
  const newWithdrawBalance = withdrawAmmount + withdrawContainer;
  setTextElementValue('.withdraw-container', newWithdrawBalance);

  const previousCurrentBalance = elementContainer('.balance');
  const newCurrentBalance = previousCurrentBalance - withdrawAmmount;
  setTextElementValue('.balance', newCurrentBalance);
});
