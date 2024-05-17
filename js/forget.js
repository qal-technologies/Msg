let form = document.querySelector('form');
let enteredEmail = document.getElementById('email');
let userEmail = localStorage.getItem('email');

function randomNum() {
    const randomNumber = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));

    const code = randomNumber.join('');

    return code;
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let loginCode = randomNum();
    localStorage.setItem('loginCode', loginCode);

    let sentCode = true;

    if (enteredEmail.value === userEmail && sentCode) {
        alert('Your login code is: ' + loginCode);

        setTimeout(() => {
        window.location.href = './code.html';
        }, 500);
        
        return true;
    }
    else {
        alert('email doesn\' match any account.' )
        form.reset();
        return false;
    }
})