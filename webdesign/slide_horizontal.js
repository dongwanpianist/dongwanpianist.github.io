var slideWidth = $("#wrap").width(); // wireframe width. css가 변경되면 자동으로 대응
var slides = $(".slideImgs").length; // slideImgs 클래스의 수. 이미지 수가 변경되면 자동으로 대응
var slideIndex = 0;
var slidePosition;

function slide(){
    if(++slideIndex >= slides){
        slideIndex = 0;
    }

    slidePosition = slideIndex * -slideWidth + "px";
    $("#slider").animate( { left:slidePosition }, 400);
};

setInterval(slide, 2000);