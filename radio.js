document.addEventListener("DOMContentLoaded", function () {
    const playlist = document.getElementById("playlist").getElementsByTagName("li");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    let currentTrack = 0;

    function playTrack(trackIndex) {
        for (let i = 0; i < playlist.length; i++) {
            playlist[i].querySelector("audio").pause();
            playlist[i].querySelector("audio").currentTime = 0;
        }
        playlist[currentTrack].querySelector("audio").play();
    }

    playTrack(currentTrack);

    prevButton.addEventListener("click", function () {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        playTrack(currentTrack);
    });

    nextButton.addEventListener("click", function () {
        currentTrack = (currentTrack + 1) % playlist.length;
        playTrack(currentTrack);
    });
});

