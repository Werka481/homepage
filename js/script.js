console.log("Cześć!");

let buttonElement = document.querySelector(".js-buttonElement");
let imageElement = document.querySelector(".js-imageElement");
let buttonThemeElement = document.querySelector(".js-header__buttonTheme");
let body = document.querySelector(".js-body");
let themeNameElement = document.querySelector(".js-themeName");

buttonElement.addEventListener("click", () => {
    imageElement.remove();
})

buttonThemeElement.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeNameElement.innerText = body.classList.contains("body--dark")
        ? "jaśniejszy"
        : "ciemniejszy"
})

