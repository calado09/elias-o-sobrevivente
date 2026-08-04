document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       POP-UP DE TRANSMISSÃO ALEATÓRIA
       ========================================================= */
    const mensagens = [
        'Sinal fraco captado a leste. Ainda não sei se existe alguém do outro lado.',
        'Nenhum push há vinte anos. O repositório da civilização parece abandonado.',
        'Se você está lendo isto, o build ainda não quebrou de vez.',
        'A torre de vigia reporta: nenhum erro crítico na estrutura hoje.',
        'Encontrei um servidor antigo ainda de pé. A luz continua acesa.',
        'Transmissão interrompida por três dias. Reconectando à floresta morta.',
        'O código de sobrevivência foi atualizado. A comunidade segue online.',
        'Não há stack trace para isto. Só o som de galhos quebrando.'
    ];

    const overlay = document.getElementById('modal-transmissao');
    const diaEl = document.getElementById('modal-dia');
    const mensagemEl = document.getElementById('modal-mensagem');
    const btnFechar = document.getElementById('modal-fechar');

    if (overlay && diaEl && mensagemEl && btnFechar) {
        const diaAleatorio = Math.floor(Math.random() * 9000) + 1000;
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

        diaEl.textContent = `Dia ${diaAleatorio}`;
        mensagemEl.textContent = mensagemAleatoria;

        // Pequeno atraso para a transição de entrada ficar suave
        window.setTimeout(() => {
            overlay.classList.add('ativo');
        }, 300);

        function fecharModal() {
            overlay.classList.remove('ativo');
        }

        btnFechar.addEventListener('click', fecharModal);

        // Fecha ao clicar fora do card
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                fecharModal();
            }
        });

        // Fecha com a tecla Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                fecharModal();
            }
        });
    }

});
