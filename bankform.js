const depositebutton=document.getElementById("deposite-button")
depositebutton.addEventListener('click',function(){
    // console.log('deposite button clicked')
   const depositeInput= document.getElementById("Deposite-input")
const depositeAmount=parseFloat(depositeInput.value)
// console.log(depositeAmount)
// console.log(depositeInput)
const depositeTotal=document.getElementById("Deposite-total")
// console.log(depositeTotal.innerText)

const currentDepositeAmount=parseFloat(depositeTotal.innerText)
const updateDepositeAmount=parseFloat(currentDepositeAmount+depositeAmount)
depositeTotal.innerText=updateDepositeAmount
const balancetotal=document.getElementById("Balance-total")
const currentBalanceAmount=parseFloat(balancetotal.innerText)
const updateBalanceAmount=currentBalanceAmount+depositeAmount
balancetotal.innerText=updateBalanceAmount
depositeInput.value=""
})



let button=document.getElementById('Withdraw-button')
    button.addEventListener('click',function(){
        let withdrawAmount=document.getElementById('Withdraw-input')
        withdrawValue=parseFloat(withdrawAmount.value)
        // console.log(withdrawValue)
        let withdrawTotal=document.getElementById('Withdraw-total')
        // console.log(withdrawTotal)
        withdrawaddedvalue=parseFloat(withdrawTotal.innerText)
        updatedwithdraw=parseFloat(withdrawaddedvalue+withdrawValue)
        withdrawTotal.innerText=updatedwithdraw
      let balancetotal=document.getElementById('Balance-total')  
      currentBalanceAmount=parseFloat(balancetotal.innerText)
      updateBalanceAmount=parseFloat(currentBalanceAmount-withdrawValue)
      balancetotal.innerText=updateBalanceAmount
      withdrawAmount.value=""
    })
