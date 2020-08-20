$(function(){
    var menu = $('.main.menu > ul > li');

    menu.hover(function(){
        $('.dept01').stop().slideDown(200);
    }, function(){
        $('.dept01').stop().slideUp(200);
    });
});