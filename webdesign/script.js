var docWidth = $("#wrap").width();
var slides = $(".slideImgs").length;
var slideIndex = 0;
var slidePosition;

function slide(){
    if(slideIndex < slides - 1){
        slideIndex++;
    } else {
        slideIndex = 0;
    }

    slidePosition = slideIndex * -docWidth + "px";
    $("#slider").animate( { left:slidePosition }, 400);
};

$(function(){
    setInterval(slide, 2000);
    
    $(".menubar li").mouseover(function(){
        $(this).find(".submenubar").stop().fadeIn(300);
    });
    $(".menubar li").mouseout(function(){
        $(this).find(".submenubar").stop().fadeOut(300);
    });
});
