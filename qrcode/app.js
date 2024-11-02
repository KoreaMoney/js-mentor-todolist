const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

const generateButton = document.querySelector("button");

function showError() {
  qrText.classList.add("error-input");
  qrText.classList.add("error");
}

function removeError() {
  qrText.classList.remove("error-input");
  qrText.classList.remove("error");
}

function generateQRcode() {
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
    removeError();
  } else {
    showError();
  }
}

qrText.addEventListener("input", function () {
  if (this.value.length > 0) {
    removeError();
  }
});

qrText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    generateQRcode();
  }
});

generateButton.addEventListener("click", generateQRcode);
