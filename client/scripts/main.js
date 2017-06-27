$(document).ready(function() {
    
    $("#landingInfo").fadeIn(1000);
    
    $(window).scroll(function() {
        
        if ($(window).scrollTop() > 200) {
            $("#aboutHeader").fadeIn(500);
            $("#block1").fadeIn(750);
            $("#block2").fadeIn(1000);
            $("#block3").fadeIn(1250);
        }
        else {
            $("#aboutHeader").fadeOut();
            $("#block1").fadeOut();
            $("#block2").fadeOut();
            $("#block3").fadeOut();
        }
        
        if ($(window).scrollTop() > 900) {
            $("#portfolioHeader").fadeIn(500);
            $("#card01").fadeIn(500);
            $("#card02").fadeIn(750);
            $("#card03").fadeIn(1000);
        }
        else {
            $("#portfolioHeader").fadeOut(500);
            $("#card01").fadeOut();
            $("#card02").fadeOut();
            $("#card03").fadeOut();
        }
    });
    
    $('a').click(function() { 
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        
        return false;
    });
    
});