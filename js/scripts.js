$(document).ready(function () {
  // remove carousel from wrap-goods
  if (screen.width >= 1200) {
    document.querySelector(" .carousel").classList.remove("carousel");
  }
  // remove carousel from wrap-viewed
  if (screen.width >= 1200) {
    document.querySelector(" .carousel").classList.remove("carousel");
  }
  $(".carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 398,
        settings: {
          slidesToShow: 1.5,
          arrows: false,
        },
      },
    ],
  });
});
// Burger

let menuBtn = document.querySelector(".burger-icon");
let menu = document.querySelector(".header-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
