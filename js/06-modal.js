const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);

refs.closeModalBtn.addEventListener("click", onCloseModal);

function onOpenModal(e) {
  document.body.classList.add("show-modal");
}

function onCloseModal(e) {
  document.body.classList.remove("show-modal");
}

refs.backdrop.addEventListener("click", onBackdropClick);

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    console.log("Click on backdrop");
    onCloseModal();
  }
}

window.addEventListener("keydown", onEscClick);

function onEscClick(e) {
  if (e.code === "Escape") {
    console.log("Click on esc");
    onCloseModal();
  }
}
