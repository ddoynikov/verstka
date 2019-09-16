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

//Паралакс
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});