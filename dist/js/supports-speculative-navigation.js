document.addEventListener("DOMContentLoaded", () => {
    const supportedElem = document.getElementById('supported');

    if (HTMLScriptElement?.supports('speculationrules')) {
        supportedElem.innerText = '✅ Supported!';
    } else {    
        supportedElem.innerText = '❌ No supported!';
    }
});
