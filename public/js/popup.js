const btn = document.querySelector(".btn-popup");
const alert = document.querySelector(".alert-danger");
const alertBtns = document.querySelectorAll(".btn-alert");
const body = document.querySelector("body");

// Delete & Logout Popup
btn.addEventListener("click", () => {
  alert.style.display = "inline";
  body.style.overflow = "hidden";
});

for (eachBtn of alertBtns) {
  eachBtn.addEventListener("click", () => {
    alert.style.display = "none";
    body.style.overflow = "auto";
  });
}
