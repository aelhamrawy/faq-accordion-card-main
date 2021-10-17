let questionElments = document.querySelectorAll(".question__item");

questionElments.forEach((el) => {
  el.addEventListener("click", () => {
    toggleAnswer(el);
  });
});

function toggleAnswer(clickedEl) {
  questionElments.forEach((el) => {
    if (clickedEl === el) {
      el.classList.toggle("active");
    } else {
      el.classList.remove("active");
    }
  });
}
