var valueToShow = "0";
var firstTime = true;

function displayValue(value){
    var displayValue = document.querySelector(".result");
    displayValue.innerText = "";
    displayValue.append(value);
    valueToShow = value;
}
function resetValues(){
    valueToShow = "0";
}
function clearAll(){
    firstTime = true;
    resetValues();
    displayValue(valueToShow);
}

function getResult(value){
    return eval(value);
}

function clearOne(value){
    var trimmerResult = value.substring(0, value.length - 1);
    displayValue(trimmerResult);
}

displayValue(valueToShow);
var keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("click",calculations);

function calculations(event){
    var value = event.target.innerText;
    switch(value){
        case "C":
            clearAll();
            break;
        case "=":
            var result = getResult(valueToShow)
            displayValue(result);
            break;
        case "←":
            clearOne(valueToShow);
            break;
        default :
            if(firstTime){
                valueToShow = "";
                firstTime = false;
            }
            valueToShow = valueToShow + value;
            displayValue(valueToShow);
            break;
    } 
}


