// handle deposite button enevt
document.getElementById('deposit-button').addEventListener('click',function(){
  // input deposite
    const depositInput = document.getElementById('deposit-input');
    
      const newDepositeAnountText = depositInput.value;
    const newDepositeAnount = parseFloat(newDepositeAnountText);
 // Total deposite
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeText =depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newTotal =previousDepositeAmount + newDepositeAnount;

    depositTotal.innerText =newTotal;

    
    

    //blance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBlanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal =previousBlanceTotal +newDepositeAnount;
    balanceTotal.innerText =newBalanceTotal;

    // clear the deposit input field
    depositInput.value='';



  });
  document.getElementById('withdrow-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText =withdrawInput.value;
    const neWithdrawAmount =parseFloat(withdrawAmountText);

    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWisthdrawText = withdrawTotal.innerText;
    const previousWisthdrawTotal = parseFloat(previousWisthdrawText);
    const newWithdrawTotal =previousWisthdrawTotal + neWithdrawAmount;
    withdrawTotal.innerText =newWithdrawTotal;

    //blance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =balanceTotal.innerText;
    const previousBlanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal =previousBlanceTotal - neWithdrawAmount;
    balanceTotal.innerText =newBalanceTotal;

    withdrawInput.value ='';

  
    
  })