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

//parallax
//about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });


    // portofolio
    if( wScroll > $('.portofolio').offset().top - 250 ) {
       $('.gambar').each(function(i){
            setTimeout(function(){
                 $('.gambar').eq(i).addClass('muncul');
            }, 600 * (i+1));
       });
    }
});