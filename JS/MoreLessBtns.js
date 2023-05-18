document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".read-more-button");
  var description = document.querySelector(".section-summary__descr");
  var isExpanded = false;
  var descriptionHeight = "150px";
  var scrollOffset = 20;

  description.style.maxHeight = descriptionHeight;
  // description.style.overflow = "hidden";

  button.addEventListener("click", function () {
    if (isExpanded) {
      description.style.maxHeight = descriptionHeight;
      button.textContent = "More";
      var descriptionOffset =
        description.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: descriptionOffset - scrollOffset,
        behavior: "smooth",
      });
    } else {
      description.style.maxHeight = description.scrollHeight + "px";
      button.textContent = "Less";
    }

    isExpanded = !isExpanded;
  });
});
