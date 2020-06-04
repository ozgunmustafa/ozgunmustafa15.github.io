class UI {
    constructor(firstUnit, secondUnit) {
        this.firstUnit = firstUnit;
        this.secondUnit = secondUnit;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputDate = document.getElementById("outputDate");
        this.currencyDate = document.getElementById("currencyDate");
        this.outputResult = document.getElementById("outputResult");
        this.outputAmount = document.getElementById("outputAmount");
    }
    changeFirst() {
        this.outputFirst.textContent = this.firstUnit.options[this.firstUnit.selectedIndex].textContent;
    }
    changeSecond() {
        this.outputSecond.textContent = this.secondUnit.options[this.secondUnit.selectedIndex].textContent;

    }
    changeDate() {
        this.outputDate.textContent = this.currencyDate.value + " tarihli kur";
    }
    displayResult(result, amount) {
        this.outputResult.textContent = result;
        this.outputAmount.textContent = document.getElementById("amount").value;

    }
}