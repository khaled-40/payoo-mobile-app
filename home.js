
// Add Money funtionality 
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
    let data = {
        name: 'Add Money',
        time: new Date().toLocaleTimeString()
    };
    addToHistory(data);
})
// Cash Out Funtionality
document.getElementById('withdraw-button').addEventListener('click', function (event) {
    event.preventDefault();
    const setNumber = '01883321846';
    const setPin = 'X4F892';
    const number = document.getElementById('number-home-withdraw').value;
    const pin = document.getElementById('password-home-withdraw').value;
    if (number === setNumber && pin === setPin) {
        const amount = document.getElementById('number-home-2-withdraw').value;
        const amountConverted = parseInt(amount);
        let initialAmount = parseInt(document.getElementById('current-amount').innerText);
        const totalAmount = initialAmount - amountConverted;
        document.getElementById('current-amount').innerText = totalAmount;

    }
    let info = {
        name: 'Cash Out',
        time: new Date().toLocaleTimeString()
    }
    addToHistory(info);
})
// Transfer Money Funtionality 
document.getElementById('sendnow-button').addEventListener('click', function (event) {
    event.preventDefault();
    const setNumber = '01883321846';
    const setPin = 'X4F892';
    const number = document.getElementById('number-home-send').value;
    const pin = document.getElementById('password-home-send').value;
    if (number === setNumber && pin === setPin) {
        const amount = document.getElementById('number-home-2-send').value;
        const amountConverted = parseInt(amount);
        let initialAmount = parseInt(document.getElementById('current-amount').innerText);
        const totalAmount = initialAmount - amountConverted;
        document.getElementById('current-amount').innerText = totalAmount;

    }
    let info = {
        name: 'Transfer Money',
        time: new Date().toLocaleTimeString()
    }
    addToHistory(info);
})
// Get Bonus Functionality 
document.getElementById('getbonus-button').addEventListener('click', function (event) {
    event.preventDefault();
    const coupon = '1234';
    const amount = document.getElementById('number-home-bonus').value;
    if (amount === coupon) {
        let initialAmount = parseInt(document.getElementById('current-amount').innerText);
        const totalAmount = initialAmount + 100;
        document.getElementById('current-amount').innerText = totalAmount;
    }
    let data = {
        name: 'Get Bonus',
        time: new Date().toLocaleTimeString()
    };
    addToHistory(data);
})
// Pay Bill functionality
document.getElementById('paynow-button').addEventListener('click', function (event) {
    event.preventDefault();
    const setNumber = '01883321846';
    const setPin = 'X4F892';
    const number = document.getElementById('number-home-pay').value;
    const pin = document.getElementById('password-home-pay').value;
    if (number === setNumber && pin === setPin) {
        const amount = document.getElementById('number-home-2-pay').value;
        const amountConverted = parseInt(amount);
        let initialAmount = parseInt(document.getElementById('current-amount').innerText);
        const totalAmount = initialAmount - amountConverted;
        document.getElementById('current-amount').innerText = totalAmount;

    }
    let info = {
        name: 'Bill Paid',
        time: new Date().toLocaleTimeString()
    }
    addToHistory(info);
})

document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = "index.html"
})

// Button Toggle feature 

function displayBlock(forms) {
    for (let form of forms) {
        form.style.display = "none";
    }
}
function pickTheRightForm(clickedButton, appearForm) {
    document.getElementById(clickedButton).addEventListener('click', function () {
        let buttonsCollection = document.getElementsByClassName('buttons');
        for (let btn of buttonsCollection) {
            btn.classList.remove("border-blue-500", "bg-[#F4F5F7]")
            btn.classList.add("border-gray-300")
        }
        document.getElementById(clickedButton).classList.remove("border-gray-300")
        document.getElementById(clickedButton).classList.add("border-blue-500", "bg-[#F4F5F7]")
        let forms = document.getElementsByClassName('forms');
        displayBlock(forms);
        document.getElementById('parent-div').style.display = "block";
        const item = document.getElementById(appearForm);
        item.style.display = "block";

    })
}
pickTheRightForm("btn-1", "add-money")
pickTheRightForm("btn-2", "cash-out")
pickTheRightForm("btn-3", "transfer-money")
pickTheRightForm("btn-4", "get-bonus")
pickTheRightForm("btn-5", "pay-bill")
pickTheRightForm("btn-6", "transaction")

// Transaction Feature Funtionality
function addToHistory(object) {
    let div = document.createElement('div');
    div.innerHTML = `
<div class="flex justify-between items-center bg-white m-3 rounded-lg p-3">
            <div class="flex items-center gap-2">
                <img class=" p-3 rounded-full bg-[#F4F5F7]" src="assets/wallet1.png" alt="">
                <div>
                    <h1 class="font-bold text-lg text-gray-500">${object.name}</h1>
                    <p class="text-3">${object.time}</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
`
    document.getElementById('transaction').appendChild(div)
}