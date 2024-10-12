const messageInput = document.querySelector("#message");
const signCountDisplay = document.querySelector(".sign-count");
const text = document.querySelector("#count");

messageInput.addEventListener("input", () => {
  const maxLength = messageInput.maxLength;
  const currentLength = messageInput.value.length;

  const remainingSigns = maxLength - currentLength;
  signCountDisplay.textContent = remainingSigns;

  if (remainingSigns <= 0) {
    text.textContent = `Maksymalna liczba znaków to ${maxLength}`;
    text.style.color = "red";
  } else {
    text.textContent = `Pozostało: ${remainingSigns}/${maxLength}`;
    text.style.color = "black";
  }
});
