$(document).ready(function() {
    $('#burger').click(function() {
        $('.header__menu, .header__menu__openmenu').toggleClass('open-menu');
    });
});

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

