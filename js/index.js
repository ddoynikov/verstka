import "./import/modules";
import "./import/slick";
import $ from "jquery";

//main
 $('.blog__wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev">‹</div>',
    nextArrow: '<div class="slick-next">›</div>'

}); 

//плавная прокрутка
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1500);
    e.preventDefault();
});

