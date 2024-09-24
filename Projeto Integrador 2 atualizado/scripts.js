// Scroll suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão dos links
        const href = this.getAttribute('href'); // Obtém o destino do link
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth' // Animação de scroll suave
        });
    });
});

// Validação simples do formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica se algum campo está vazio
    if (name === "" || email === "" || message === "") {
        alert('Por favor, preencha todos os campos.'); // Alerta ao usuário
        e.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
    } else {
        alert('Mensagem enviada com sucesso!');
    }
});

// Animação ao passar o mouse sobre os jogos
document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)'; // Aumenta levemente o tamanho do item
        this.style.transition = 'transform 0.3s ease'; // Animação suave
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });
});

// Função para aumentar a acessibilidade: Modo alto contraste
// Cria um botão para alternar o modo de alto contraste, útil para usuários com deficiência visual
const toggleContrastBtn = document.createElement('button');
toggleContrastBtn.textContent = "Alto Contraste";
toggleContrastBtn.style.position = 'fixed';
toggleContrastBtn.style.top = '20px';
toggleContrastBtn.style.right = '20px';
toggleContrastBtn.style.padding = '10px';
toggleContrastBtn.style.backgroundColor = '#000';
toggleContrastBtn.style.color = '#fff';
toggleContrastBtn.style.border = 'none';
toggleContrastBtn.style.cursor = 'pointer';
document.body.appendChild(toggleContrastBtn);

let isHighContrast = false; // Variável para controlar o estado de alto contraste
toggleContrastBtn.addEventListener('click', function() {
    if (!isHighContrast) {
        document.body.style.backgroundColor = '#000'; // Fundo preto
        document.body.style.color = '#fff'; // Texto branco
        isHighContrast = true; // Atualiza o estado
    } else {
        document.body.style.backgroundColor = ''; // Remove o estilo de fundo
        document.body.style.color = ''; // Remove o estilo de texto
        isHighContrast = false; // Atualiza o estado
    }
});

// Função para leitura de texto em voz alta (acessibilidade adicional)
const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text); // Cria um novo objeto de fala
    utterance.lang = 'pt-BR'; // Define o idioma como português
    speechSynthesis.speak(utterance); // Fala o texto em voz alta
};

// Adiciona a funcionalidade de leitura ao clicar em um jogo
document.querySelectorAll('.game-item h3').forEach(item => {
    item.addEventListener('click', function() {
        speakText(`Você escolheu o jogo de ${this.textContent}`); // Fala o nome do jogo escolhido
    });
});

// Função de destaque de foco em campos de formulário para maior visibilidade
document.querySelectorAll('form input, form textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.style.outline = '2px solid #A020F0'; // Coloca uma borda roxa ao focar
    });
    field.addEventListener('blur', function() {
        this.style.outline = ''; // Remove a borda ao sair do foco
    });
});


