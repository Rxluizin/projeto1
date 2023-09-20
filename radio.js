document.addEventListener("DOMContentLoaded", function () {
    const playlist = document.querySelectorAll(".music");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const searchInput = document.getElementById("search");
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

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        for (let i = 0; i < playlist.length; i++) {
            const musicTitle = playlist[i].querySelector("h2").textContent.toLowerCase();
            if (musicTitle.includes(searchTerm)) {
                playlist[i].style.display = "block";
            } else {
                playlist[i].style.display = "none";
            }
        }
    });
});
