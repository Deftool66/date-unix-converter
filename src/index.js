import convertUnix from "./convert_unix";

const dateInput = document.querySelector("#date-input");
const unixInput = document.querySelector("#unix-input");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

function clearInputs() {
  unixInput.setAttribute("value", "");
  dateInput.setAttribute("value", "");
  dateInput.setAttribute("value", "");
}

function setBtnAttributes(attrValue, attrCls) {
  btn.setAttribute("value", attrValue);
  btn.setAttribute("type", attrValue);
  btn.setAttribute("class", attrCls);
}

form.addEventListener("reset", (event) => {
  clearInputs();
  setBtnAttributes("Submit", "submit-btn");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dateValue = dateInput.value;
  const unixValue = parseInt(unixInput.value);

  if (unixValue && !isNaN(unixValue)) {
    dateInput.setAttribute("value", convertUnix(unixValue));
  } else if (dateValue) {
    const timeStamp = new Date(dateValue).getTime();
    unixInput.setAttribute("value", timeStamp);
  }

  setBtnAttributes("Reset", "reset-btn");
});
