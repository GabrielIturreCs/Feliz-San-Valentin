function descargarPDF() {
    const link = document.createElement('a');
    link.href = './pdfs/san valentin luna.pdf';
    link.download = 'san valentin luna.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function generarEmojis(cantidad) {
    const emojis = [
        '<img src="images/PhotoRoom-20240424_221111.png" class="emoji-img">',
        '❤️'
    ];
    for (let i = 0; i < cantidad; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
}

function mostrarMasEmojis() {
    generarEmojis(10);
}

setInterval(() => generarEmojis(5), 1500);

//musica //
window.onload = function() {
    var audio = document.getElementById('audio');

    // Intentamos reproducir el audio
    audio.play().catch(function(error) {
        // Si falla, mostramos un mensaje o intentamos habilitar la reproducción al interactuar con la página
        console.log('Error de reproducción automática:', error);

        // Podemos permitir la interacción del usuario si es necesario
        document.body.addEventListener('click', function() {
            audio.play();
        });
    });
};