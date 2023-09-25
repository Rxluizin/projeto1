const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const musicas = [
    'musicas/1.mp3',
    'musicas/2.mp3',
    'musicas/3.mp3',
    'musicas/4.mp3',
    'musicas/5.mp3',
    'musicas/6.mp3',
    'musicas/7.mp3',
    'musicas/8.mp3',
    'musicas/9.mp3',
    'musicas/10.mp3'
];
let musicaAtual = 0;

function tocarMusica() {
    audio.src = musicas[musicaAtual];
    audio.play();
    esconderTodasMusicas();
}

function esconderTodasMusicas() {
    for (let i = 0; i < musicas.length; i++) {
        if (i === musicaAtual) {
            document.getElementById(`musica${i}`).hidden = false;
        } else {
            document.getElementById(`musica${i}`).hidden = true;
        }
    }
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerText = 'Pausar';
    } else {
        audio.pause();
        playButton.innerText = 'Play';
    }
});

prevButton.addEventListener('click', () => {
    if (musicaAtual > 0) {
        musicaAtual--;
        tocarMusica();
    }
});

nextButton.addEventListener('click', () => {
    if (musicaAtual < musicas.length - 1) {
        musicaAtual++;
        tocarMusica();
    }
});

// Adicione elementos de áudio para cada música
for (let i = 0; i < musicas.length; i++) {
    const audioElement = document.createElement('audio');
    audioElement.src = musicas[i];
    audioElement.id = `musica${i}`;
    audioElement.hidden = true;
    document.body.appendChild(audioElement);
}

tocarMusica();
