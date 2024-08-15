function showSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')

    sidebar.style.display = 'flex'
    sidebar.classList.toggle('open')
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')

    sidebar.classList.toggle('open')

}

const obfuscatedElement = document.querySelector('.obfuscated');

function getRandomChar() {
    const chars = 'ⅳ℅℃ℶⅉⅮ⅔℔ↁ⅓⅖⅑⅍ⅽ℆ⅵⅴÅ';
    return chars[Math.floor(Math.random() * chars.length)];
}

function obfuscateText(text) {
    return text.split('').map(char => getRandomChar()).join('');
}

let delay = 8; //in seconds
let intervalId;

setTimeout(() => {
    intervalId = setInterval(() => {
        const originalText = obfuscatedElement.textContent;
        obfuscatedElement.textContent = obfuscateText(originalText);
    }, 50);
}, delay * 1000);