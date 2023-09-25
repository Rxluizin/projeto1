const playlist = [
    {
        title: "N me sinto mais mal",
        artist: "Sidoka",
        album: "A Night at the Opera",
        audioSrc: "1.mp3",
        albumImage: "bohemian-rhapsody.jpg"
    },
    {
        title: "qq se ta ensinuando",
        artist: "Sidoka",
        album: "Imagine",
        audioSrc: "2.mp3",
        albumImage: "imagine.jpg"
    },
    // Adicione mais músicas à playlist
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");
const albumImage = document.getElementById("album-image");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");

function displayPlaylist() {
    const playlistElement = document.getElementById("playlist");
    playlistElement.innerHTML = "";

    for (let i = 0; i < playlist.length; i++) {
        const song = playlist[i];
        const songElement = document.createElement("div");
        songElement.classList.add("song");
        songElement.textContent = `${i + 1}. ${song.title} - ${song.artist}`;
        songElement.addEventListener("click", () => playSong(i));
        playlistElement.appendChild(songElement);
    }
}

function playSong(index) {
    currentSongIndex = index;
    const song = playlist[index];
    audioSource.src = song.audioSrc;
    albumImage.src = song.albumImage;
    songTitle.textContent = song.title;
    artist.textContent = `Artista: ${song.artist}`;
    album.textContent = `Álbum: ${song.album}`;
    audio.load();
    audio.play();
}

function searchSong() {
    const searchInput = document.getElementById("search").value.toLowerCase();

    for (let i = 0; i < playlist.length; i++) {
        const song = playlist[i];
        const title = song.title.toLowerCase();

        if (title.includes(searchInput)) {
            playSong(i);
            return;
        }
    }

    alert("Música não encontrada na playlist.");
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function previousSong() {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    }
}

function nextSong() {
    if (currentSongIndex < playlist.length - 1) {
        playSong(currentSongIndex + 1);
    }
}

// Exibir a lista de reprodução inicialmente
displayPlaylist();
