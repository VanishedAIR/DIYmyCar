function showPopup(carName) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");

  popupTitle.innerText = carName;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.opacity = 1;
  }, 10);
}

function hidePopup() {
  const popup = document.getElementById("popup");

  popup.style.opacity = 0;

  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
}
