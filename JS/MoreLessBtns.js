// document.addEventListener("DOMContentLoaded", function () {
//   var button = document.querySelector(".read-more-button");
//   var description = document.querySelector(".section-summary__descr");
//   var isExpanded = false;

//   description.style.maxHeight = "200px";
//   description.style.overflow = "hidden";

//   button.addEventListener("click", function () {
//     if (isExpanded) {
//       description.style.maxHeight = "200px";
//       button.textContent = "More";
//     } else {
//       description.style.maxHeight = "";
//       button.textContent = "Less";
//     }

//     isExpanded = !isExpanded;
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".read-more-button");
  var description = document.querySelector(".section-summary__descr");
  var isExpanded = false;
  var descriptionHeight = "200px";
  var scrollOffset = 20; // Опциональное значение смещения прокрутки

  // Ограничение текста до 200px высоты
  description.style.maxHeight = descriptionHeight;
  description.style.overflow = "hidden";

  // Обработчик нажатия на кнопку
  button.addEventListener("click", function() {
    if (isExpanded) {
      // Свернуть текст
      description.style.maxHeight = descriptionHeight;
      button.textContent = "More";
      // Прокрутить страницу к началу текста
      var descriptionOffset = description.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: descriptionOffset - scrollOffset,
        behavior: "smooth"
      });
    } else {
      // Развернуть текст
      description.style.maxHeight = description.scrollHeight + "px";
      button.textContent = "Less";
    }

    isExpanded = !isExpanded;
  });
});
