


    const operatorButtons=document.querySelector(".operatorButtons");
    const add = document.querySelector(".add")
    const subtract = document.querySelector(".subtract");
    const multiply = document.querySelector(".multiply");
    const divide = document.querySelector(".divide");
    const answer = document.querySelector(".answer");
    
    const numberButtons = document.querySelector(".numberButtons");
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");
    const six = document.querySelector(".six");
    const seven = document.querySelector(".seven");
    const eight = document.querySelector(".eight");
    const nine = document.querySelector(".nine");
    const zero = document.querySelector(".zero");
    
    const result = document.querySelector(".result");


function operators(){
operatorButtons.addEventListener("click",(event)=>{
      result.textContent += event.target.textContent
            if(event.target.textContent === answer.textContent){
        const combinedOperatorsResult =result.textContent.match(/\d+|[/\-+*]/g)
        const operatorsOnly = combinedOperatorsResult.filter(item=>
        ["+","-","/","*"].includes(item)
        )
        if(operatorsOnly.length > 1){
const indexOfDivision = combinedOperatorsResult.indexOf("/")
            if(indexOfDivision !== -1){
const divisionBodmas = Number(combinedOperatorsResult[indexOfDivision-1]) 
                                                /
                       Number(combinedOperatorsResult[indexOfDivision+1])

     combinedOperatorsResult.splice(indexOfDivision-1,3,divisionBodmas)
    result.textContent = combinedOperatorsResult.join("")}
    

        const indexOfMultiplication = combinedOperatorsResult.indexOf("*")
        if(indexOfMultiplication !== -1){
            const multiplicationBodmas = Number(combinedOperatorsResult[indexOfMultiplication-1]) 
                                                *
                       Number(combinedOperatorsResult[indexOfMultiplication+1])

     combinedOperatorsResult.splice(indexOfMultiplication-1,3,multiplicationBodmas)
     result.textContent = combinedOperatorsResult.join("")}

        let indexOfAddition = combinedOperatorsResult.indexOf("+")
       let indexOfSubtraction = combinedOperatorsResult.indexOf("-")



        if(indexOfAddition!==-1 &&indexOfSubtraction !==-1 &&indexOfAddition < indexOfSubtraction){
         indexOfAddition = combinedOperatorsResult.indexOf("+")
         if(indexOfAddition !== -1){
            const additionBodmas =  Number(combinedOperatorsResult[indexOfAddition-1])  
                                                  +
                        Number(combinedOperatorsResult[indexOfAddition+1])
    combinedOperatorsResult.splice(indexOfAddition-1,3,additionBodmas)
     result.textContent = combinedOperatorsResult.join("")}


       indexOfSubtraction = combinedOperatorsResult.indexOf("-")
          if(indexOfSubtraction !== -1){
const subtractionBodmas =Number(combinedOperatorsResult[indexOfSubtraction-1]) 
                                                -
                         Number(combinedOperatorsResult[indexOfSubtraction+1]) 
 combinedOperatorsResult.splice(indexOfSubtraction-1,3,subtractionBodmas)
 result.textContent = combinedOperatorsResult.join("")} 

 
        indexOfAddition = combinedOperatorsResult.indexOf("+")
        indexOfSubtraction = combinedOperatorsResult.indexOf("-")
          }else if(indexOfAddition !== -1 && indexOfSubtraction !== -1 && indexOfAddition > indexOfSubtraction){
        indexOfSubtraction = combinedOperatorsResult.indexOf("-")
                    if(indexOfSubtraction !== -1){
     const subtractionBodmas =Number(combinedOperatorsResult[indexOfSubtraction-1]) 
                                                -
                         Number(combinedOperatorsResult[indexOfSubtraction+1])
 combinedOperatorsResult.splice(indexOfSubtraction-1,3,subtractionBodmas)
 result.textContent = combinedOperatorsResult.join("")} 

        indexOfAddition = combinedOperatorsResult.indexOf("+")
                    if(indexOfAddition !== -1){ 
    const additionBodmas =  Number(combinedOperatorsResult[indexOfAddition-1])  
                                                  +
                        Number(combinedOperatorsResult[indexOfAddition+1])
    combinedOperatorsResult.splice(indexOfAddition-1,3,additionBodmas)
     result.textContent = combinedOperatorsResult.join("")}
          }
 
    
}else if(operatorsOnly.length === 1){
if(result.textContent.includes("+")){
       const addResult = result.textContent.split("+")
          result.textContent =  Number(addResult[0]) + Number(addResult[1].replace("=",""))
        
        }else if(result.textContent.includes("-")){
            const subtractResult=result.textContent.split("-")
            result.textContent = Number(subtractResult[0]) - Number(subtractResult[1].replace("=",""));
        }else if(result.textContent.includes("*")){
            const multiplyResult=result.textContent.split("*")
            result.textContent = Number(multiplyResult[0]) * Number(multiplyResult[1].replace("=",""));
       }else if(result.textContent.includes("/")){
       const divideResult = result.textContent.split("/")
          result.textContent =  Number(divideResult[0]) / Number(divideResult[1].replace("=",""))
    }
}
}
            
    });
}

function numbers(){
numberButtons.addEventListener("click",(event)=>{
       result.textContent += event.target.textContent
})
}
 document.querySelector(".refresh").addEventListener("click",()=>{
    result.textContent = ""
 })

operators();
numbers();