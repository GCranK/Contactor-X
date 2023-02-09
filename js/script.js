const slider = document.querySelector('.swiper');
let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 60,
    navigation: {
        nextEl: '.btn-slide-right',
        prevEl: '.btn-slide-left',
      },
    effect: 'slide',
    initialSlide: 0,
    longSwipes: 'true',
    longSwipesMs: 100,
    speed: 1000,
    width: 1400,
    loop: 'true',
    breakpoints: {
        340: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 3,
        },
        960: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,        
    },
    on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
    },
    
})
$(function() {
  $(".slider").slick({
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    prevArrow: '.prev_arrow',
    nextArrow: '.next_arrow',
    slidesToScroll: 1, 
  });
});
const sliderFor = document.querySelector('.slider-for');
const sliderNav = document.querySelector('.slider-nav');
let mySwiperNav = new Swiper(sliderNav,{
  slidesPerView: 3,
  spaceBetween: 10,
  loopedSlides: 5,
  freeMode: true,
  loop: true,
  direction: 'vertical',
});
let mySwiperFor = new Swiper(sliderFor, {
  spaceBetween: 10,
  loopedSlides: 5,
  loop: true,
  speed: 2000,
  navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
  thumbs: {
    swiper: mySwiperNav,
  }
})
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('open');
});
let btn = document.querySelector('.white_btn');
let go = document.querySelector('.our_services_container');
btn.addEventListener('click', e => {
  go.scrollIntoView({ 
    block: 'start', 
    behavior: 'smooth', 
    })
  });
  let contact = document.querySelector('.contact_scroll');
  let goContact = document.querySelector('.footer');
  contact.addEventListener('click', e => {
  goContact.scrollIntoView({ 
      block: 'start', 
      behavior: 'smooth', 
      })
    });
