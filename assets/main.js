// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Initialize AOS
AOS.init();



 new Swiper(".myswiper", {
  loop: true,
  autoplay:true,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
