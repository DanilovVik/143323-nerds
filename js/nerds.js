var link = document.querySelector(".contact-btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("user-name");


link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-visible");
  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-visible");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
  if (!user.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

  } else {
    localStorage.setItem("user-name", user.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-visible")) {
      popup.classList.remove("modal-content-visible");
    }
  }
});
