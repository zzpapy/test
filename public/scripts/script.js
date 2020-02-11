$(".photo").click(function(){
    var id=$(this).attr('id');
    console.log('toto');
    $('.'+id).show(newFunction());
    // $('.'+id).css('display','block');
})
$(".arrow").click(function() {
    console.log('toto');
    var ref=$(this).attr("href");
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".section_nav").offset().top
    });
  });
$(".fa-times-circle").click(function(){
    var id=$(this).attr('id');
    console.log( $('.'+id));
    $('.'+id).remove('style');
    $('.'+id).css('display','none');
})

function newFunction() {
    return 300;
}
