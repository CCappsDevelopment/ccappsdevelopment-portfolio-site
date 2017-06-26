$(document).ready(function() {
    
    $("#landingInfo").fadeIn(1000);
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 150) {
            $("#aboutHeader").fadeIn(500);
            $("#block1").fadeIn(500);
            $("#block2").fadeIn(750);
            $("#block3").fadeIn(1000);
        }
        else {
            $("#aboutHeader").fadeOut();
            $("#block1").fadeOut();
            $("#block2").fadeOut();
            $("#block3").fadeOut();
        }
    });
    
    $('a').click(function() { 
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        
        return false;
    });
    
});