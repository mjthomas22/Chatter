﻿/* off-canvas sidebar toggle */

$('[data-toggle=offcanvas]').click(function () {
    $(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
});


/*Home Page Login*/
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});