document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    const defaultNumber = "01883321846";
    const defaultPin = "X4F892";
    const inputNumber = document.getElementById('number').value;
    const inputPassword = document.getElementById('password').value;
    if(inputNumber===defaultNumber&&inputPassword===defaultPin){
        window.location.href="./home.html"
    }
})