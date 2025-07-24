var allButtons = document.querySelectorAll(".btn");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", handleFilterClick);
}
window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".All").click();
});
function handleFilterClick() {
  //Remove highlights from all buttons before adding it to the clicked one
  document.querySelectorAll(".btn").forEach((element) => {
    element.classList.remove("click-change-color");
  });
  //Remove previous clicked image  before showing the clicked ones 
  document.querySelectorAll(".image").forEach((element) => {
    element.style.display = "none";
  });
  //Highlight the button which is clicked
  this.classList.add("click-change-color");

  //Show relevant images based on filter 
  switch (this.textContent) {
    case "All":
      document.querySelectorAll(".image").forEach((element) => {
        element.style.display = "block";
      });
      break;
    case "Animals":
      document.querySelectorAll(".an").forEach((element) => {
        element.style.display = "block";
      });
      break;
    case "Architectures":
      document.querySelectorAll(".ar").forEach((element) => {
        element.style.display = "block";
      });
      break;
    case "Foods":
      document.querySelectorAll(".f").forEach((element) => {
        element.style.display = "block";
      });
      break;
    default://Nature
      document.querySelectorAll(".n").forEach((element) => {
        element.style.display = "block";
      });

      break;
  }
}
