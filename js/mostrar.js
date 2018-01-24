var $nav = $('nav');

$('.icon').on('click', function() {
    $nav.toggleClass('mostrar_menu');
    $(this).children().eq(1).toggleClass('mostrar_icon');
    $(this).children().eq(0).toggleClass('esconder_icon');
})