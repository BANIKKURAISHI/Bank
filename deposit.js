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

totalBalance.innerText=totalBalanceNumber + depositNumber



/*const amount =document.getElementById('deposit')

const previousAmount=amount.innerText
const amountNumber =parseFloat(previousAmount)

const total= depositNumber +amountNumber

amount.innerText=total*/


deposit.value=''

})


document.getElementById('btn-button2').addEventListener('click',function(){
const withdraw =document.getElementById('WithdrawAmount')
const withdrawString=withdraw.value  
const withdrawNumber=parseFloat(withdrawString)




withdraw.value='';


const withdrawAmount=document.getElementById('Withdraw5')
const withdrawAmountString=withdrawAmount.innerText
const withdrawAmountNumber=parseFloat(withdrawAmountString)

if(withdrawNumber > totalBalanceNumber){
    alert('You do not have sufficient Balance') 
}
else{}
withdrawAmount.innerText=withdrawAmountNumber+withdrawNumber

totalBalance.innerText=totalBalanceNumber-withdrawNumber
})



const totalBalance =document.getElementById('total')
const totalBalanceString=totalBalance.innerText
const totalBalanceNumber =parseFloat(totalBalanceString) 

