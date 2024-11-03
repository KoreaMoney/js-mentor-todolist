let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonElementId = event.currentTarget.id;

    if (buttonElementId === "decrease") {
      count--;
    } else if (buttonElementId === "reset") {
      count = 0;
    } else {
      count++;
    }
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "black";

    value.textContent = count;
  });
});
