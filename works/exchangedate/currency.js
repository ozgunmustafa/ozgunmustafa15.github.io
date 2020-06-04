class Currency {
    constructor(firstCurrency, secondCurrency, dateCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.dateCurrency = dateCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";

        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject) => {
            this.url = `https://api.exchangeratesapi.io/${this.dateCurrency}?base=${this.firstCurrency}`;
            fetch(this.url)
                .then((response) => response.json())
                .then((data) => {
                    const parity = data["rates"][this.secondCurrency];

                    const amount2 = Number(this.amount.value);
                    let total = parity * amount2;
                    resolve(total);


                })
                .catch((err) => reject(err));
        });

    }
    changeAmount() {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
    changeCurrencyDate(newDate) {
        this.dateCurrency = newDate;
    }
}