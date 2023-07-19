// For currency & Amount

const currencyEl_one = document.getElementById('currency-one');

const currencyEl_two = document.getElementById('currency-two');

const amountEl_one = document.getElementById('amount-one');

const amountEl_two = document.getElementById('amount-two');

// For Rate & Swap

const rateEl = document.getElementById('rate');

const swap = document.getElementById('swap');

// Fetch currency rates and update
function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/66878efbd643ecc5244cd1ad/latest/${currency_one}`)
    .then((Response) => Response.json())
    .then((data) =>{
    //    console.log(data);
    const rate = data.conversion_rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

    amountEl_two.value = (amountEl_one.value *rate). toFixed(2);
    });
}

currencyEl_one.addEventListener('change', calculate);

currencyEl_two.addEventListener('change', calculate);

amountEl_one.addEventListener('input', calculate);

amountEl_two.addEventListener('input', calculate);

calculate();