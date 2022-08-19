$(document).ready(function () {
  $(".order__show").on("click", function () {
    $(".popup__order").fadeIn(300);
  });

  $(".call__show").on("click", function () {
    $(".popup__call-back").fadeIn(300);
  });

  $(".get__show").on("click", function () {
    $(".get__back").fadeIn(300);
  });

  $(".get__close, .get__back").on("click", function (e) {
    if (e.target === this) $(".get__back").fadeOut(300);
  });

  $(".order__close, .popup__order").on("click", function (e) {
    if (e.target === this) $(".popup__order").fadeOut(300);
  });

  $(".call-back__close, .popup__call-back").on("click", function (e) {
    if (e.target === this) $(".popup__call-back").fadeOut(300);
  });

  $(".sec45__close, .popup__sec45").on("click", function (e) {
    if (e.target === this) $(".popup__sec45").fadeOut(300);
  });

  $(".leave__close, .popup__leave").on("click", function (e) {
    if (e.target === this) $(".popup__leave").fadeOut(300);
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  setTimeout(() => {
    $(".popup__sec45").fadeIn(300);
  }, 45000);

  let flag = false;
  $("body").on("mouseleave", function () {
    if (!flag) {
      $(".popup__leave").fadeIn(300);
      flag = true;
    }
  });
});
