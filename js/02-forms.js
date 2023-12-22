const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  console.log(e);
  e.preventDefault();
  const formElements = e.currentTarget;
  console.dir(formElements.elements);

  // const email = formElements.email.value;
  // console.log(email);
  // const password = formElements.password.value;
  // console.log(password);
  // const subscription = formElements.subscription.value;
  // console.log(subscription);

  // const formData = { email, password, subscription };
  // console.log(formData);

  const formData = new FormData(e.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log("onFormDataSubmit name ->", name);
    console.log("onFormDataSubmit value ->", value);
  });
}
