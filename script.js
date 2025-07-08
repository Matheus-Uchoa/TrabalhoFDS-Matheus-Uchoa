const botao = document.getElementById('botaoMensagem');
const divMensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  if (divMensagem.textContent === "") {
    // Mostrar mensagem
    divMensagem.textContent = "Olá! Que bom ter você por aqui.";
    divMensagem.style.marginTop = "15px";
    divMensagem.style.fontSize = "1.2em";
  } else {
    // Esconder mensagem
    divMensagem.textContent = "";
    // Se quiser, pode limpar estilos também:
    divMensagem.style.marginTop = "";
    divMensagem.style.fontSize = "";
  }
});

const musica = document.getElementById('musicaFundo');
    const botaoMusica = document.getElementById('botaoMusica');

    botaoMusica.addEventListener('click', () => {
      if (musica.paused) {
        musica.play();
        botaoMusica.textContent = "⏸️ Pausar Música";
      } else {
        musica.pause();
        botaoMusica.textContent = "▶️ Tocar Música";
      }
    });
