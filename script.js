$(function(){
    var clicks = 1;
    $('.container div').click(function(){
        if(clicks == 1){
            $(this).css('background', 'red');
            clicks++;
        }
        else if(clicks == 2){
            $(this).css('background', 'blue');
            clicks++;
        }
        else if(clicks == 3){
            $(this).css('background', 'green');
            clicks++;
        }
        else{
            $(this).css('background', 'white');
            clicks = 1;
        }
    });
});

$(document).ready(function(){
    $('resetButton').click(function(){
        ('container div').addClass('reset');
    });
});
