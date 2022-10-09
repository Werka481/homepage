{
    const welcome = () => {
        console.log("Hello!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeNameElement = document.querySelector(".js-themeName");
        const buttonThemeElement = document.querySelector(".js-header__buttonTheme");

        body.classList.toggle("body--dark");
        themeNameElement.innerText = body.classList.contains("body--dark") ? "jaśniejszy" : "ciemniejszy";
    }

    const removeImage = () => {
        const buttonElement = document.querySelector(".js-buttonElement");
        const imageElement = document.querySelector(".js-imageElement");

        imageElement.remove();
    }

    const init = () => {
        const buttonThemeElement = document.querySelector(".js-header__buttonTheme");
        const buttonElement = document.querySelector(".js-buttonElement");

        buttonElement.addEventListener("click", removeImage);
        buttonThemeElement.addEventListener("click", toggleBackground);

        welcome();

    }

    init();

}

