$(document).ready(() => {
    carouselInit()
})

function carouselInit() {
    $('.carousel').slick({
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
}
