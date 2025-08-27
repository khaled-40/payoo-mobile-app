
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
        for(let btn of buttonsCollection){
            btn.classList.remove("border-blue-500", "bg-[#F4F5F7]")
            btn.classList.add("border-gray-300")
        }
        document.getElementById(clickedButton).classList.remove("border-gray-300")
        document.getElementById(clickedButton).classList.add("border-blue-500", "bg-[#F4F5F7]")
        let forms = document.getElementsByClassName('forms');
        displayBlock(forms);
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
// border-blue-500 bg-[#F4F5F7]
