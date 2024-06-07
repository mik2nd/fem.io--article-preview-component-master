const shareBtn = document.querySelector(".share");
const btnActive = document.querySelector(".active");
const iconShare = document.querySelector("svg#share-btn path");

shareBtn.addEventListener("click", function () {
  btnActive.classList.toggle("none");

  if (btnActive.classList.toggle("none") === true) {
    btnActive.classList.toggle("none");
    shareBtn.style.backgroundColor = "var(--clr-btn)";
    iconShare.style.fill = "var(--clr-theme)";
  } else {
    btnActive.classList.toggle("none");
    shareBtn.style.backgroundColor = "var(--clr-theme)";
    iconShare.style.fill = "var(--clr-btn)";
  }
});
