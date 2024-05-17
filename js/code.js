let form = document.querySelector('form');
let codeInputs = document.querySelectorAll('.code-box');
let back = document.getElementById('back');
let notCode = document.getElementById('notCode');


back.onclick = () => {
    window.location.href = './forget.html';
}

codeInputs.forEach((input, index, array)=> {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < array.length - 1) {
            array[index + 1].focus();
        }
    });
    input.addEventListener('focus', () => {
        notCode.innerText = '';
    }) 
});


form.addEventListener('submit', (e) => {

    e.preventDefault();

    const loginCode = localStorage.getItem('loginCode');

    const enteredCode = Array.from(codeInputs).map(input => input.value).join('');

    if (enteredCode === loginCode) {
        alert('sucessful!');
        
        setTimeout(() => {
        form.reset();
        window.location.href = './change.html';
        }, 500);

        return true;
    }
    else {
        notCode.innerText = 'The login code is incorrect!';
        codeInputs.values = '';
        return false;
    };

})