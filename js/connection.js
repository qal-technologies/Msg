function checkInternetConnection() {
    if (navigator.onLine) {
        alert('Your connection is connected');
    } 
    else{
        alert('Your connection is lost');
    }
}

checkInternetConnection();
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);
