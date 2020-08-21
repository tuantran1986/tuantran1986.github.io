$(document).ready(function() {
    let vitrimenutren = $('#menutren').offset().top;
    let vitrigioithieu = $('#gioithieu').offset().top;
    let vitrikynang = $('#kynang').offset().top;
    let vitrisanpham = $('#sanpham').offset().top;
    let vitrilienhe = $('#lienhe').offset().top;
    let vitricomment = $('#comment').offset().top;
    
    // CLICK - CUON XUONG :
    $('.mn1').click(function() {
        // console.log(vitrigioithieu);
        $('html,body').animate({scrollTop: vitrigioithieu},800);
     });

    $('.mn2').click(function() {
        // console.log(vitrikynang);
        $('html,body').animate({scrollTop: vitrikynang},800);
     });

    $('.mn3').click(function() {
        // console.log(vitrisanpham);
        $('html,body').animate({scrollTop: vitrisanpham},800);
     });

    $('.mn4').click(function() {
        // console.log(vitrilienhe);
        $('html,body').animate({scrollTop: vitrilienhe},800);
     });

    $('.mn5').click(function() {
        // console.log(vitricomment);
        $('html,body').animate({scrollTop: vitricomment},800);
     });
    
    // CLICK - LEN TOP :
    $('.mn0').click(function() {
        // console.log(vitrimenutren);
        $('html,body').animate({scrollTop: vitrimenutren},800);
     });

});
