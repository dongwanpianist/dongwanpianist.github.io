
var slideHeight = $("#sliderWrap").height(); // 이미지 높이. css가 변경되면 자동으로 대응
var slidesOriginal = $(".slideImgs").length; // slideImgs 클래스의 수. 이미지 수가 변경되면 자동으로 대응
var slidesNew = slidesOriginal + 1;
var slideIndex = 0;
var slidePosition;

$("#slider").append('<div id="slideImg1_return" class="slideImgs"><a href="#">#slider img 1</a></div>');

setInterval(slide, 2000);

function slide(){
    slideIndex++;
    slidePosition = (slideIndex * -slideHeight) + "px";
    $("#slider").animate( { top:slidePosition }, 400);

    if(slideIndex >= slidesOriginal){
        slideIndex = 0;
        $("#slider").animate( { top:0 }, 0);
    }
};

