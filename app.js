const active = document.querySelector(".active");

active.addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  if (wrapper.hidden == true) {
    wrapper.hidden = false;
    document.querySelector(
      ".arrow"
    ).style = `background-image: url(./assets/up.svg);`;
  } else {
    wrapper.hidden = true;
    document.querySelector(
      ".arrow"
    ).style = `background-image: url(./assets/down.svg);`;
  }
});
