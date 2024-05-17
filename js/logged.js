let loggedIn = sessionStorage.getItem('loggedIn');

if (loggedIn === "false") {

    setInterval(() => {
    alert('Please you\'re not Logged In and some feature won\'t be avaliable to you...');
    }, 50000);

    setTimeout(() => {
        alert('You\'ll be redirected to login');
        window.location.href = './login.html';
    }, 200000);
}

window.onclose = () => {
    sessionStorage.setItem('loggedIn', false);
}