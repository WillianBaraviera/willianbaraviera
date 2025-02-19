const helloText = document.getElementById('hello-text');
const changeTextBtn = document.getElementById('change-text-btn');

// Adiciona um evento de clique ao botão
changeTextBtn.addEventListener('click', () => {
    // Altera o texto do h1
    if (helloText.textContent === 'Hello, World!') {
        helloText.textContent = 'Olá, Mundo!';
    } else {
        helloText.textContent = 'Hello, World!';
    }
});
