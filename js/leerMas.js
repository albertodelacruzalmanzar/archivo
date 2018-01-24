/* ------1ra manera.------

$(document).ready(function(){
    $("button").click(function(){
        $(this).siblings().toggleClass("leer-mas");
    });
});*/

/* ------2da. manera.------*/

var $button = $('.button');

$button.on('click', function(){
    //$(this).html('<i>leer menos<i>').siblings().toggleClass('leer-mas');
    $(this).siblings().toggleClass('leer-mas');
    //$(this).firstChild().toggleClass('menos');
    $(this).children().eq(0).toggleClass('menos');
    $(this).children().eq(1).toggleClass('mas');

})
