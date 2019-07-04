//event pada saat klik limk
$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html','body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
   
     e.preventDefault();
   });

// headroom
   var myElement = document.querySelector(".headroom");
   // construct an instance of Headroom, passing the element
   var headroom  = new Headroom(myElement);
   // initialise
   headroom.init(); 