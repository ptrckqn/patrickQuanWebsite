
//Smooth scrolling
$(document).ready(function() {
		$('a[href]').bind('click', function(e) {

				var target = $(this).attr("href");
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 57 //Offset of scroll
				}, 800, function() {
						location.hash = target;
				});

				return false;
		});
});

//Revealing objects as the pages scrolls
window.sr = ScrollReveal({duration:"700", delay: "500"});
sr.reveal(".paraContent");
sr.reveal(".pic", 100);

//Fading out down arrow
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
  //250 is fade pixels
  });


	var progressBar = new ProgressBar.Circle('#container', {
	    strokeWidth: 2
	});
