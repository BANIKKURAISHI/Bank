document.getElementById('btn-button2').addEventListener('click',function(){

const first=document.getElementById('WithdrawAmount')
const firstString=first.value
const firstNumber=parseFloat(firstString)
first.value =''

const second =document.getElementById('Withdraw5')
const secondString =second.innerText
const secondNumber=parseFloat(secondString)


const total=firstNumber+secondNumber 



const third =document.getElementById('total')
const thirdString=third.innerText
const thirdNumber=parseFloat(thirdString)

const update =thirdNumber - firstNumber

if(firstNumber >= update){
    alert("You do not have sufficient Balance ")
}
else{
    
    third.innerText =update 
    second.innerText=total
}

})