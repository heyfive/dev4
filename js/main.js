/// function Hover Effect /////////
/*$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        $(this).toggleClass('hover_effect');
    });
});*/

/// Start functions on DocumentReady ///////// 
$(document).ready(function() { 
 	 $('body').hide().fadeIn(500);
 	 sizeContent();
 	 colorControl();
});


$(window).resize(function(){
	sizeContent();
});


/// scroll to Element Navi /////////
function scrollToElement(id){
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 600);
}


/// Height Viewportsize ///////// 
function sizeContent() {
	viewportHeight = $(window).height();
	$("#me, #caseIntroContainer").css("min-height", viewportHeight); 
}



//////// Start functions on scroll ///////// 

$(window).scroll(function(){
	headerchange();
	menuScrollClose();
	logoSetBack();
});

////////////// headerchange //////////////// 

function headerchange() {
    var value = $(this).scrollTop();
    if ( value > 50 )
        $(".introHeader").removeClass('headerBig'),
        //$(".addressBar").css("opacity","0"),
        $(".topLinkContainer").addClass('topLinkOpen'),
        $(".caseIntroHg").fadeOut( "slow" );
    else
        $(".introHeader").addClass('headerBig'),
        //$(".addressBar").css("opacity","1"),
        $(".topLinkContainer").removeClass('topLinkOpen'),
        $(".caseIntroHg").fadeIn( "slow" );
}


////////////// inview Test ////////////////


$('.content').bind('inview', function(event, visible) {
      if (visible) {
      	console.log('visible');
      
	  	color 	= $(this).data('color');
		bgColor	= $(this).data('bgcolor');
		text1 	= $(this).data('text1');
		text2 	= $(this).data('text2');
      
        $('body, a').css({"color":color});
		$('.menuBtnElement').css({"background-color":color});
		$("body").css("background-color",bgColor);
        $('#logo1').text(text1);
		$('#logo2').text(text2);
      }	 	
});

function logoSetBack(){
 if($(window).scrollTop() < 10){
	 $('#logo1').text('Heyfive.');
	 $('#logo2').text('me');
 }
}





////////////// colorchange ////////////////

function colorControl() {

		color 	= $(this).data('color');
		bgColor	= $(this).data('bgcolor');
		text1 	= $(this).data('text1');
		text2 	= $(this).data('text2');
      
        $('body, a').css({"color":color});
		$('.menuBtnElement').css({"background-color":color});
		$("body").css("background-color",bgColor);
        $('#logo1').text(text1);
		$('#logo2').text(text2);
		
		console.log('colorcontrol');
		
}

/*
var title 		= null;
var color 		= null;
var trenner 	= null;
var trennerKpl 	= null;

/// Textänderung neu ////
var current_image_index =  1;


document.addEventListener("touchmove", ScrollStart, false);

function ScrollStart() {
		//scroll();
		headerchange();
		menuScrollClose();
}

function scroll(){
	var image_height 	= $(".content").height();
	var buffer_space 	= $(window).height()/4;
	var projects_offset = $(window).scrollTop() - $(".content").offset().top + buffer_space;
	var image_index 	= Math.ceil(projects_offset / image_height);
	var parent_project 	= $(".content" + image_index);

	var parent_project_id = $(".content").attr('id');
		
	if (image_index != current_image_index) {
			current_image_index = image_index;
			textchanger(image_index);
			console.log('parent_project: ' + parent_project);
		}
}

function textchanger(image_index) {
	
	switch(image_index){
		
		case 1:
			color 	= $("#introContainer").data('color');
			bgColor	= $("#introContainer").data('bgcolor');
			text1 	= $("#introContainer").data('text1');
			text2 	= $("#introContainer").data('text2');
		break;
		
		case 2:
			color 	= $("#five").data('color');
			bgColor	= $("#five").data('bgcolor');
			text1 	= $("#five").data('text1');
			text2 	= $("#five").data('text2');
		break;
		
		case 3:
			color 	= $("#four").data('color');
			bgColor	= $("#four").data('bgcolor');
			text1 	= $("#four").data('text1');
			text2 	= $("#four").data('text2');
		break;
		
		case 4:
			color 	= $("#three").data('color');
			bgColor	= $("#three").data('bgcolor');
			text1 	= $("#three").data('text1');
			text2 	= $("#three").data('text2');
		break;
		
		case 5:
			color 	= $("#two").data('color');
			bgColor	= $("#two").data('bgcolor');
			text1 	= $("#two").data('text1');
			text2 	= $("#two").data('text2');
		break;
		
		case 6:
			color 	= $("#one").data('color');
			bgColor	= $("#one").data('bgcolor');
			text1 	= $("#one").data('text1');
			text2 	= $("#one").data('text2');
		break;
		
		case 7:
			color 	= $("#me").data('color');
			bgColor	= $("#me").data('bgcolor');
			text1 	= $("#me").data('text1');
			text2 	= $("#me").data('text2');
		break;
		
		
		default:
			color 	= $("#introContainer").data('color');
			bgColor	= $("#introContainer").data('bgcolor');
			text1 	= 'Heyfive.';
			text2 	= 'me';
			console.log('default');
	}
	
	
     
    
	//$('body, a').css({"color":color});
	//$('.menuBtnElement').css({"background-color":color});
    //$("body").css("background-color",bgColor);
    		console.log(image_index);
    $('#logo1').text(text1);
    $('#logo2').text(text2);

}
*/

//////// toggle the menu ///////// 
function menuToggle(){
	$('nav').toggleClass('navClosed');
	$('header').toggleClass('navOpen');
	$('.menuBtn').toggleClass('menuBtnCloseIcon');
}

//////// closw the menu on scrollstart///////// 
function menuScrollClose(){
	$('nav').addClass('navClosed');
	$('header').removeClass('navOpen');
	$('.menuBtn').removeClass('menuBtnCloseIcon');
}