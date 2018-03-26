
//Smooth scrolling
$(document).ready(function() {
		setBindings();
});


	function setBindings(){
    $(".nav-item").click(function(event){
        event.preventDefault();
        var sectionId = $(this).attr('href');
        $("html, body").animate({
            scrollTop: ($(sectionId).offset().top)-($(".navbar-expand-lg").outerHeight())
        }, 800);
    });
};

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
