// keypress
// keydown
// keyup

const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};

window.addEventListener("keydown", onKeypress);

function onKeypress(e) {
  console.log(e);
  refs.output.textContent += e.key;
}

refs.clearBtn.addEventListener("click", onBtnClearClick);

function onBtnClearClick(e) {
  refs.output.textContent = "";
}
