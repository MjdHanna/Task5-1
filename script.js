const firstNumber=document.querySelector(".first-number")
const secondNumber=document.querySelector(".second-number")
const operation=document.querySelector(".operator")
const result=document.querySelector(".result")
const sumbit=document.querySelector(".submit")


let firstNumberValue;
let secondNumberValue;
let operatorValue;

firstNumber.addEventListener('input',function(event){
    firstNumberValue=event.target.value;
  
})
secondNumber.addEventListener('input',function(event){
    secondNumberValue=event.target.value;
   
})
operation.addEventListener('change',function(event){
    operatorValue=event.target.value;
    
})
sumbit.addEventListener('click',function(event){
    event.preventDefault();//من اجل ايقاف عملية ال refresh  لبتي تقوم بها ال form 
    switch (operatorValue) {
        case '+':result.innerHTML=Number( firstNumberValue) + Number( secondNumberValue);
            break;
        case '-':result.innerHTML=Number( firstNumberValue) - Number( secondNumberValue);
            break;
        case '*':result.innerHTML=Number( firstNumberValue) * Number( secondNumberValue);
            break;
        case '/':result.innerHTML=Number( firstNumberValue) / Number( secondNumberValue);
            break;
    
        default:
           result.innerHTML=0;
    }
})

