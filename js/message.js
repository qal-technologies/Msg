
//For going back to chats
function homeBack() {
    document.getElementById('back').addEventListener('click', () => {
        window.location.href = './recent.html';
    });
};

//For uploading of file/image/video
function upload() {
    document.getElementById("upload").addEventListener("click", () => {
        document.getElementById("fileInput").click();
      });
}      

//Calling functions
window.onload = () => {
    const input = document.getElementById('chat-input');
    input.focus();
}

homeBack();
upload();