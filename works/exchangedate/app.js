const amountElement = document.getElementById("amount");
const firstUnit = document.getElementById("firstCurrency");
const secondUnit = document.getElementById("secondCurrency");
const currencyDate = document.getElementById("currencyDate");
const currency=new Currency("USD","TRY");
const ui =new UI(firstUnit,secondUnit);


eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);

    firstUnit.onchange = function(){
        
        currency.changeFirstCurrency(firstUnit.options[firstUnit.selectedIndex].textContent);
        ui.changeFirst();
    };
    
    secondUnit.onchange = function(){
        currency.changeSecondCurrency(secondUnit.options[secondUnit.selectedIndex].textContent);  
        ui.changeSecond();
      
    };
    currencyDate.onchange = function(){

        currency.changeCurrencyDate(currencyDate.value);
        ui.changeDate();

    };
}
function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then((result,amount)=>{
        ui.displayResult(result,amount)
    })
    .catch(err=>console.error(err))
}