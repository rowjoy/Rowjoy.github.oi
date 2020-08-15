$(document).ready(function(){

//STICKY MENU
$(".js--services-section").waypoint(function(direction){
	if (direction=="down") {
		$("nav").addClass("sticky");
	} else{
		$("nav").removeClass("sticky");
	}

});




//MIXTUP (PORTFOLIO SECTION)

var mixer=mixitup('.container');
});