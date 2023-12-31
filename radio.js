const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = [
    'musicas/1.mp3',
    'musicas/2.mp3',
    'musicas/3.mp3',
    'musicas/4.mp3',
    'musicas/5.mp3',
    'musicas/6.mp3',
    'musicas/7.mp3',
    'musicas/8.mp3',
    'musicas/9.mp3',
    'musicas/10.mp3',
];

let currentSongIndex = 0;

function loadSong() {
    audio.src = songs[currentSongIndex];
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
}

loadSong();

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
