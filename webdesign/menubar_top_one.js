$(".menubar > ul > li").mouseover(function(){
	$(this).children(".submenubar").stop().fadeIn(300);
});
$(".menubar > ul > li").mouseout(function(){
	$(this).children(".submenubar").stop().fadeOut(300);
});