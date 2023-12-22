const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckBox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
// refs.input.addEventListener("input", onInputInput);
// refs.input.addEventListener("change", onInputChange);

// function onInputFocus(e) {
//   console.log("Інпут отримав фокус - подія фокус");
// }

// function onInputBlur(e) {
//   console.log("Інпут отримав Blur - подія Blur");
// }

// function onInputInput(e) {
//   console.log("Інпут отримав Input - подія Input");
// }

// function onInputChange(e) {
//   console.log("Інпут отримав Change - подія Change");
// }

refs.licenseCheckBox.addEventListener("change", onLicenseChange);

refs.input.addEventListener("change", onInputChange);

function onLicenseChange(e) {
  const isLicenseChecked = e.currentTarget.checked;
  console.log(isLicenseChecked);
  refs.btn.disabled = !isLicenseChecked;
}

function onInputChange(e) {
  const name = e.currentTarget.value;
  name !== ""
    ? (refs.nameLabel.textContent = name)
    : (refs.nameLabel.textContent = "Анонім");
}
