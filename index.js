const changeTheme = document.querySelector(".changeThemeButton");

const setTheme = (theme) => {
  if (theme === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    changeTheme.style.backgroundColor = "white";
    changeTheme.style.color = "black";
    changeTheme.textContent = "Zmień motyw: jasny";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    changeTheme.style.backgroundColor = "dimgray";
    changeTheme.style.color = "white";
    changeTheme.textContent = "Zmień motyw: ciemny";
  }
};

const saveTheme = localStorage.getItem("theme");
if (saveTheme) {
  setTheme(saveTheme);
} else {
  setTheme("white");
}

changeTheme.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme" || "white");
  const newTheme = currentTheme === "black" ? "white" : "black";
  localStorage.setItem("theme", newTheme);
  setTheme(newTheme);
});
