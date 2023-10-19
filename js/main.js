const collapsibles = document.querySelectorAll(".collapse");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    console.log("this is", this.classList);
    this.classList.toggle("collapse--expanded");
  })
);
