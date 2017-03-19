$(document).ready(function(){

    $('.slider').slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 6,
        arrows: true,
        dots: false,
        infinite: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: false
                }
            }
        ]

    });
});
