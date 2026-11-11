const modal = document.getElementById("background-popup");
const openBtn = document.getElementById("button-popup-open");
const closeBtn = document.querySelector(".close-button");
const modalVideo = document.getElementById("vid-popup");

function hideModal() {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalVideo.play();
});

closeBtn.addEventListener("click", hideModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});