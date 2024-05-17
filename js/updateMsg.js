import { html, Txt } from "../../../qq/methods";


 

function sendMessage(time, userInput) {
    if (userInput === '') {
        return '';
    }

    return `
    <div class="msgDiv">
        <div class="msgElement" id="sent">
            <div class="msgContent">
                <p>${userInput}</p>
            </div>
            <span class="time">${time}</span>
        </div>
    </div>`;
}


function getCurrentTime() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    return `${hour}:${minute}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('.chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMain = document.getElementById('chat-main');

    sendButton.addEventListener('click', function () {
        const userInput = chatInput.value.trim();
        const time = getCurrentTime();
        const messageHTML = sendMessage(time, userInput);

        if (messageHTML) {
            chatMain.innerHTML += messageHTML;
            chatInput.value = '';

            const newMessage = chatMain.lastChild;
            newMessage.classList.add('messageSent');
            sendButton.classList.add('sentAnimate');

            setTimeout(() => {
                newMessage.classList.remove('messageSent');
                sendButton.classList.remove('sentAnimate');
            }, 500);
        }
    });
});