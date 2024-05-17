let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('password2');

let matchWarning = document.getElementById('notMatch');
let form = document.querySelector('form');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = localStorage.getItem('user') === "true";
    const existingEmail = localStorage.getItem('email');

    confirmPassword.onfocus = () => {
        matchWarning.innerHTML = '';
    };

    if (password.value === confirmPassword.value && password.value !== '' && user === 'false' ) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem('user', true);

        matchWarning.innerHTML = '';
        form.reset();

        setTimeout(() => {
        window.location.href = './recent.html';
        }, 500);
        
    }
    else if (user || existingEmail === email) {
        alert('You already have an account!');

        setTimeout(() => {
        window.location.href = './login.html';
        }, 500);

    }
    else {
        localStorage.setItem('user', false);
        confirmPassword.value = '';
        matchWarning.innerHTML = 'Password doesn\'t match!'; 
        return false;
    }
});




// const pop = {
//     alert: function(message, bgColor, TextColor, btnColor, bgShadow) {

//         let all = [bgColor, TextColor, btnColor, bgShadow];
//         all.forEach ( color => color.replace(/^['"]|['"]$/g, ''));
        
//       const modal = document.createElement("div");
//       modal.className = "custom-modal";
//       modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//       modal.style.display = "flex";
//       modal.style.justifyContent = "center";
//       modal.style.alignItems = "center";
//       modal.style.position = "fixed";
//       modal.style.top = "0";
//         modal.style.left = "0";
//       modal.style.width = "100%";
//         modal.style.height = "100%";
//         modal.style.zIndex = '9999';
  
//       const content = document.createElement("div");
//       content.className = "custom-modal-content";
//       content.style.backgroundColor = bgColor;
//       content.style.padding = "10px";
//       content.style.borderRadius = '10px';
//       content.style.border = "1px solid #888";
//         content.style.marginInline = '5%';
//       content.style.textAlign = "center";
//         content.style.boxShadow = `0px 0px 50px ${bgShadow}`;
  
//       const messageElement = document.createElement("p");
//         messageElement.textContent = message;
//       messageElement.style.padding = "12px";
//         messageElement.style.fontFamily = 'serif';
//         messageElement.style.marginBottom = '5px';
//       messageElement.style.color = TextColor;
  
//       content.appendChild(messageElement);
  
//       const buttonContainer = document.createElement("div");
//       buttonContainer.className = "custom-modal-button-container";
  
//       const closeBtn = document.createElement("button");
//       closeBtn.className = "custom-modal-close";
//       closeBtn.textContent = "Cancel";
//       closeBtn.style.borderRadius = '10px';
//         closeBtn.style.backgroundColor = btnColor;
//         closeBtn.style.color = 'white';
//       closeBtn.style.border = "none";
//       closeBtn.style.padding = "10px 20px";
//       closeBtn.style.cursor = "pointer";
//       closeBtn.style.fontSize = "16px";
//       closeBtn.style.width = "100%";
//       closeBtn.onclick = this.closeAlert;
  
//       buttonContainer.appendChild(closeBtn);
//       content.appendChild(buttonContainer);
  
//       modal.appendChild(content);
  
//       document.body.appendChild(modal);
//     },
  
//     closeAlert: function() {
//       const modal = document.querySelector(".custom-modal");
//       if (modal) {
//         modal.parentNode.removeChild(modal);
//       }
//     },
//   };
  

// pop.alert('Hi, THis a custom alert!', black, white, '#005bff', grey );