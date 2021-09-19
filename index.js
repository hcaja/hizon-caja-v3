$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
});

// toggle menu/navbar script
    $('menu-btn').click(function(){
        $arguments('.navbar .menu').toggleClass("active");
        $arguments('.menu-btn i').toggleClass("active");
    });
});



