$(document).ready(function(){
	$("#container").mouseenter(function() {
        $("#background").fadeIn(0);
    });
    $("#container").mouseleave(function() {
        $("#background").fadeOut(0);
	});
});