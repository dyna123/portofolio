//event pada saat klik limk
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html','body').animate({
        scrollTop: elemenTujuan.offset().top - 50px 
    }, 1250, 'easeInOutExpo');
   
     e.preventDefault();

   });