$('.result-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    dotsClass: 'gym-dots',
    prevArrow: '<button type="button" class="gym-button gym-button_prev"></button>',
    nextArrow: '<button type="button" class="gym-button gym-button_next"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
});