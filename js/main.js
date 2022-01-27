$(function(){
    'use strict';
    var winh = $(window).height();
    var upperh = $('.upper-bar').innerHeight();
    var navh =  $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winh - (upperh+navh));
});