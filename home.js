document.getElementById('addmoney-button').addEventListener('click', function (event) {
    event.preventDefault();
    const setNumber = '01883321846';
    const setPin = 'X4F892';
    const number = document.getElementById('number-home').value;
    const pin = document.getElementById('password-home').value;
    if (number === setNumber && pin === setPin) {
        const amount = document.getElementById('number-home-2').value;
        const amountConverted = parseInt(amount);
        let initialAmount = parseInt(document.getElementById('current-amount').innerText);
        const totalAmount = initialAmount + amountConverted;
        document.getElementById('current-amount').innerText = totalAmount;
        
    }
})