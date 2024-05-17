let form = document.querySelector('form');
let noMatch = document.querySelector('#notMatch');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPass = document.getElementById('newPassword');
    const confPass = document.getElementById('confirmPassword');

    confPass.onfocus = () => { noMatch.innerText = '' };
    newPass.onfocus = () => { noMatch.innerText = '' };

    if (newPass.value === confPass.value && newPass.value !== '') {
        alert('Pasword changed!');
        noMatch.innerHTML = '';
        localStorage.setItem('password', newPass.value);
        setTimeout(() => {
        window.location.href = './login.html';
        }, 500);

        form.reset();
        
        return true;
    }
    else {
        confPass.value = '';
        noMatch.innerHTML = 'Password doesn\'t match!';
        return false
    }
})