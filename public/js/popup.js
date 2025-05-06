const delBtn = document.querySelector(".btn-popup-del");
const logoutBtn = document.querySelector(".btn-popup-logout");

const alert = document.querySelector(".popup-delete");
const logoutAlert = document.querySelector(".popup-logout");

const alertBtns = document.querySelectorAll(".btn-del");
const logoutAlertBtns = document.querySelectorAll(".btn-logout");

const body = document.querySelector("body");
const myData = document.getElementById("my-data");

console.log(delBtn);

// Delete & Logout Popup
if (myData != null) {
  delBtn.addEventListener("click", () => {
    alert.style.display = "inline";
    body.style.overflow = "hidden";
  });

  for (eachBtn of alertBtns) {
    eachBtn.addEventListener("click", () => {
      alert.style.display = "none";
      body.style.overflow = "auto";
    });
  }
} else {
  logoutBtn.addEventListener("click", () => {
    logoutAlert.style.display = "inline";
    body.style.overflow = "hidden";
  });

  for (eachBtn of logoutAlertBtns) {
    eachBtn.addEventListener("click", () => {
      logoutAlert.style.display = "none";
      body.style.overflow = "auto";
    });
  }
}
