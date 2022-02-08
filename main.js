$(document).ready(function () {

    $('#btn1').click(function () {
        $('p:eq(0)').css('display', 'block');
        $('p:gt(0)').css('display', 'none');

    });
    $('#btn2').click(function () {
        $('p:eq(1)').css('display', 'block');
        $('p:gt(1),p:lt(1)').css('display', 'none');
    });
    $('#btn3').click(function () {
        $('p:eq(2)').css('display', 'block');
        $('p:gt(2),p:lt(2)').css('display', 'none');
    });
    $('#btn4').click(function () {
        $('p:eq(3)').css('display', 'block');
        $('p:gt(3),p:lt(3)').css('display', 'none');
    });
    $('#btn5').click(function () {
        $('p:eq(4)').css('display', 'block');
        $('p:gt(4),p:lt(4)').css('display', 'none');
    });



});