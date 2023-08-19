document.getElementById('btn-button').addEventListener('click',function(){
///step-------------------------111111111111111111111111111111111111111111111111111111111111111////////////////////
const deposit =document.getElementById('AddAmount')
const depositString=deposit.value  
const depositNumber=parseFloat(depositString)

console.log(typeof(depositNumber))


/////////step=================================22222222222222222222222222222222222222222222222222222222222222222222222222//////////
const add=document.getElementById('deposit')
const addString =add.innerText
const addNumber =parseFloat(addString)
console.log(addNumber)
add.innerText=addNumber+depositNumber

///////step -----------3333333333333333333333333333333333333333333333333333333333333333333333333333333//////////////////////////////////

const totalBalance =document.getElementById('total')
const totalBalanceString=totalBalance.innerText
const totalBalanceNumber =parseFloat(totalBalanceString)
const total=totalBalanceNumber + depositNumber
totalBalance.innerText=total



/*const amount =document.getElementById('deposit')

const previousAmount=amount.innerText
const amountNumber =parseFloat(previousAmount)

const total= depositNumber +amountNumber

amount.innerText=total*/


deposit.value=''

})


