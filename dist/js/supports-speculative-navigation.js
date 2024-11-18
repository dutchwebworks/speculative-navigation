document.addEventListener("DOMContentLoaded", () => {
    const supportedElem = document.getElementById('supported');

    if (HTMLScriptElement?.supports('speculationrules')) {
        supportedElem.innerText = '✅ Supported in your web browser!';
    } else {    
        supportedElem.innerText = '❌ Not supported in your web browser!';
    }
});
