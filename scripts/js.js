$(document).ready(function () {
  $(".zakaz_show").on("click", function () {
    $(".zakaz_back").fadeIn(300);
  });

  $(".call_show").on("click", function () {
    $(".call_back").fadeIn(300);
  });

  $(".get_show").on("click", function () {
    $(".get_back").fadeIn(300);
  });

  $(".get_close, .get_back").on("click", function (e) {
    if (e.target === this) $(".get_back").fadeOut(300);
  });

  $(".zakaz_close, .zakaz_back").on("click", function (e) {
    if (e.target === this) $(".zakaz_back").fadeOut(300);
  });

  $(".call_close, .call_back").on("click", function (e) {
    if (e.target === this) $(".call_back").fadeOut(300);
  });

  $(".sec45_close, .sec45_back").on("click", function (e) {
    if (e.target === this) $(".sec45_back").fadeOut(300);
  });

  $(".valit_close, .valit_back").on("click", function (e) {
    if (e.target === this) $(".valit_back").fadeOut(300);
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  setTimeout(() => {
    $(".sec45_back").fadeIn(300);
  }, 45000);

  let flag = false;
  $("body").on("mouseleave", function () {
    if (!flag) {
      $(".valit_back").fadeIn(300);
      flag = true;
    }
  });
});
