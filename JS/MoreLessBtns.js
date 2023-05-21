// document.addEventListener("DOMContentLoaded", function () {
//   var button = document.querySelector(".read-more-button");
//   var description = document.querySelector(".section-summary__descr");
//   var isExpanded = false;
//   var descriptionHeight = "150px";
//   var scrollOffset = 20;

//   description.style.maxHeight = descriptionHeight;
//   // description.style.overflow = "hidden";

//   button.addEventListener("click", function () {
//     if (isExpanded) {
//       description.style.maxHeight = descriptionHeight;
//       button.textContent = "More";
//       var descriptionOffset =
//         description.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: descriptionOffset - scrollOffset,
//         behavior: "smooth",
//       });
//     } else {
//       description.style.maxHeight = description.scrollHeight + "px";
//       button.textContent = "Less";
//     }

//     isExpanded = !isExpanded;
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".read-more-button");
  var description = document.querySelector(".section-summary__descr");
  var isExpanded = false;
  var descriptionHeight = "150px";
  var descriptionHeightWide = "300px"; // Новая высота для ширины >= 1200px
  var scrollOffset = 20;

  description.style.maxHeight = descriptionHeight;

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

  // Медиа-запрос для изменения максимальной высоты при ширине >= 1200px
  var mediaQuery = window.matchMedia("(min-width: 1200px)");

  function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
      descriptionHeight = descriptionHeightWide;
      description.style.maxHeight = descriptionHeight;
    } else {
      descriptionHeight = "150px";
      description.style.maxHeight = descriptionHeight;
    }
  }

  handleMediaQuery(mediaQuery); // Обрабатываем медиа-запрос при загрузке страницы
  mediaQuery.addListener(handleMediaQuery); // Обрабатываем медиа-запрос при изменении размера окна
});
