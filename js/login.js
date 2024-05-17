let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let emailWarning = document.getElementById('warning1');
let passwordWarning = document.getElementById('warning2');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const userCreated = localStorage.getItem("user");

    passwordInput.onfocus = () => { passwordWarning.innerText = '' };
    emailInput.onfocus = () => { emailWarning.innerText = '' };

    if (userCreated === "true" && emailInput.value === savedEmail && passwordInput.value === savedPassword) {
        alert('Logged In');
        sessionStorage.setItem("LoggedIn", true);
        form.reset();

        setTimeout(() => {
            window.location.href = './recent.html';
        }, 500);
    }
    else if (emailInput.value !== savedEmail || emailInput.value == '') {
        emailInput.value = '';
        localStorage.setItem('loggedIn', false);
        emailWarning.innerHTML = 'Incorrect email/ number!';

        return false;
    }
    else if (passwordInput.value !== savedPassword || passwordInput.value === '') {
        passwordInput.value = '';
        localStorage.setItem('loggedIn', false);
        passwordWarning.innerHTML = 'Incorrect password!';

        return false;
    }
    else if (userCreated === 'false') {
        alert('You have not created an account yet!');

        setTimeout(() => {
        window.location.href = './create.html';
        }, 500);

        return false;
    }
});

