const slider = new Splide('#slider', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 5,
    autoplay: 'play',
    autoScroll: {
        speed: 1,
      },
    breakpoints: {
      1024: { perPage: 4 },
      820:  { perPage: 3 },
      600:  { perPage: 2 },
      400:  { perPage: 1.3 },
    },
})
slider.mount();
// link: https://splidejs.com/


// SclollUp
window.onload = () => {
  window.onscroll = function (e) {
      let winY = window.scrollY;
      if (winY > 300) {
          progressBar();

          scrollbarAnimation();

          winY = 0;
      }
  }

  const scrollBtn = document.querySelector('.isShowBtn')
  window.onscroll = () => {
      if (window.scrollY > 300) {
          scrollBtn.classList.remove('isShowBtn_hide');
      } else if (window.scrollY < 300) {
          scrollBtn.classList.add('isShowBtn_hide');
      }
  }
  scrollBtn.onclick = () => {
      window.scrollTo(0,0);
  };

  // $('.isShowBtn').click(function() {
  //     $(window).scrollTop(0);
  // })
}
console.log('webpack starterkit'); 


// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});


