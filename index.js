const changeTheme = document.querySelector(".changeThemeButton");
const showDefinition = document.querySelectorAll(".skill-name");
const backToTopButton = document.querySelector("#backToTop");

const setTheme = (theme) => {
  if (theme === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.documentElement.style.setProperty("--icon-color", "white");
    changeTheme.style.backgroundColor = "white";
    changeTheme.style.color = "black";
    changeTheme.textContent = "Zmień motyw: jasny";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.documentElement.style.setProperty("--icon-color", "black");
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
  const currentTheme = localStorage.getItem("theme") || "white";
  const newTheme = currentTheme === "black" ? "white" : "black";
  localStorage.setItem("theme", newTheme);
  setTheme(newTheme);
});

// document.querySelectorAll(".skill-name").forEach((skill) => {
//   skill.addEventListener("click", () => {
//     const description = skill.nextElementSibling; // Następny element to opis
//     if (description.style.display === "none") {
//       description.style.display = "block"; // Pokaż definicję
//     } else {
//       description.style.display = "none"; // Ukryj definicję
//     }
//   });
// });

showDefinition.forEach((skill) => {
  skill.addEventListener("click", () => {
    const definition = skill.nextElementSibling;
    if (definition.style.display === "none") {
      definition.style.display = "block";
    } else {
      definition.style.display = "none";
    }
  });
});

window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  if (window.scrollY > 5) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
