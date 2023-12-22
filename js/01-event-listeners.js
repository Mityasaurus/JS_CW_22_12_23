const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// console.log(targetBtn);
// console.log(addListenerBtn);
// console.log(removeListenerBtn);

addListenerBtn.addEventListener("click", (e) => {
  console.log(e);
  console.log("Вішаю подію на цільову кнопку");

  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", (e) => {
  console.log(e);
  console.log("Знімаю слухача події з цільової кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(e) {
  console.log(e);
  console.log("Клік по цільовій кнопці");
}
