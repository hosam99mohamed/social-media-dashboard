let changeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};
let changeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

let checkBox = document.querySelector("#toggle");

checkBox.addEventListener("change", () => {
  let cards = document.querySelectorAll("#card");

  let header = document.querySelector("#header");

  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeToLight();

    cards.forEach(function (card) {
      card.style.backgroundColor = "hsl(227, 47%, 96%)";
    });

    header.style.backgroundColor = "hsl(227, 47%, 96%)";

  } else {
    changeToDark();

    cards.forEach(function (card) {

      card.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    
    header.style.backgroundColor = "hsl(232, 19%, 15%)";
  }
});
