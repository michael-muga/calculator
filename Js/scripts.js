function add(number1, number2){
    return number1+number2
};
function subtract(number1, number2){
    return number1-number2
};
function multiply(number1, number2){
    return number1*number2
};
function divide(number1, number2){
    return number1/number2
};

$(document).ready(function(){
    $("form#home").submit(function(event){
        event.preventDefault();
        let number1  = parseInt($("#num1").val());
        let number2 = parseInt($("#num2").val());
        let addResult = add(number1,number2)
        $("#output").text(addResult);
        console.log(add(number1,number2))
        
        let subtractResult = subtract(number1,number2)
        $("#output").text(subtractResult)
        console.log(subtract(number1,number2))

        
        let output = document.getElementById("output")
        let multiplyResult = multiply(number1,number2)
        //$("#output").append(multiplyResult);
        output.innerText= multiplyResult;
        console.log(multiply(number1,number2))
        let divideResult = divide(number1,number2)
        $("#output").text(divideResult);
        console.log(divide(number1,number2))

    
    })

})
