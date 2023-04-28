$(".menubar").mouseover(function(){
	$(this).find(".submenubar").stop().fadeIn(300);
});
$(".menubar").mouseout(function(){
	$(this).find(".submenubar").stop().fadeOut(300);
});