const themes = document.querySelector("#themes");

themes.addEventListener("change", () => {
  const cambioThema = themes.value;
  if (cambioThema == "Dark") {
    document.querySelector("body").style =
      "background-color: var(--cor-de-fondo2);";
  } else if (cambioThema == "White") {
    document.querySelector("body").style =
      "background-color: var(--cor-de-fondo1);";
  }
});
