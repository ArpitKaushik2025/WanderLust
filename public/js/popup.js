if (!window.myData) {
  window.myData = document.getElementById("my-data");
}

// Delete & Logout Popup
if (window.myData != null) {
  const delBtn = document.querySelector(".btn-popup-del");
  const alert = document.querySelector(".popup-delete");
  const alertBtns = document.querySelectorAll(".btn-del");
  const body = document.querySelector("body");

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
  const logoutBtn = document.querySelector(".btn-popup-logout");
  const logoutAlert = document.querySelector(".popup-logout");
  const logoutAlertBtns = document.querySelectorAll(".btn-logout");
  const body = document.querySelector("body");

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
