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


