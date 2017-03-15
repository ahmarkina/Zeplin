$(document).ready(function(){

    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 6,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                 breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false
    }
    }
    ]
    });
});
