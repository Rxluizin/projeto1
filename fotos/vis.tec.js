const images = document.querySelectorAll(".gallery-image");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

let currentImageIndex = 0;

images.forEach((image, index) => {
    image.addEventListener("click", () => openModal(index));
});

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = "flex";
    modalImage.src = images[currentImageIndex].src;
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    } else if (event.key === "ArrowLeft") {
        navigate(-1);
    } else if (event.key === "ArrowRight") {
        navigate(1);
    }
});

function navigate(step) {
    currentImageIndex += step;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    modalImage.src = images[currentImageIndex].src;
}

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});