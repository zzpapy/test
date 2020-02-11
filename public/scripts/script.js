$(".photo").click(function(){
    var id=$(this).attr('id');
    console.log('toto');
    $('.'+id).css('display','block');
})
$(".fa-times-circle").click(function(){
    var id=$(this).attr('id');
    console.log( $('.'+id));
    $('.'+id).remove('style');
    $('.'+id).css('display','none');
})