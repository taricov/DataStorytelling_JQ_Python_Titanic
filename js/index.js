$(document).ready(function(){
    $('#book').click(function(){
        $('#page_1').fadeOut(2000);
        $('body').css({'background': 'black', 'transition': '2s 2s linear'})
        .queue(function (next) { 
            // var trans = new Audio("../assets/soundEffects/Transition/Sound Effect 6.wav");
            // trans.play();
        });
        $('.pre_page_2').delay(4000).fadeIn(2000);
        $('.pre_page_2').delay(500).fadeOut(2000);
        // $('#page_2').delay(5000).fadeIn(2000);
        $('#page_2').css({'display':'flex'});
        $('#pre_img_page_2').css({'display':'flex'});
        $('#pre_img_page_2 img').css({'visibility': 'hidden'});

        $("#pre_img_page_2 img").eq(0).delay(10000)
        .queue(function (next) { 
            $(this).css({'visibility': 'visible'});
            // var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 3.wav");
            // audio.play();
        });
        $("#pre_img_page_2 img").eq(1).delay(11000)
        .queue(function (next) { 
            $(this).css({'visibility': 'visible'});
            // var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 3.wav");
            // audio.play();
        });
        $("#pre_img_page_2 img").eq(2).delay(12000)
        .queue(function (next) { 
            $(this).css({'visibility': 'visible'});
            // var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 3.wav");
            // audio.play();
        });
        $("#pre_img_page_2 img").eq(3).delay(13000)
        .queue(function (next) { 
            $(this).css({'visibility': 'visible'});
            // var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 3.wav");
            // audio.play();
        });

        $("#pre_img_page_2")
        .delay(14000)
        .queue(function () { 
        $(this)
        .removeAttr('style')
        .css({'display': 'none'})
        
    });
  
    setTimeout("slider()",15000);

    $('#page_2')
    .delay(19000)
    .queue(function () {
    $(this)
    .css({'display': 'none'});
    });

    // $("#page_2 img").eq(18).delay(20000).fadeIn(2000)
    //     .queue(function () { 

    //         $("#page_2")
    //         .delay(2000).css({'display':'flex','width': '100%', 'height':'100%','transition':'.3s'});

    //         var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 4.wav");
    //         audio.play();
    //     });

    $('#page_2_')
    .delay(20000)
    .css("display", "flex")
    .hide()
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000);

    $('#page_5')
    .delay(26000)
    .css('display','flex')
    .hide()
    .fadeIn();

    });

    $('#ready').click(function(){
        $('#page_5')
        .fadeOut(200);

        $('#page_6')
        .delay(1000)
        .css('display','flex')
        .hide()
        .fadeIn(2000);

        $(".input").keyup(function (key) {
            console.log(key.which)
            if (key.which == 13 && $(this).val() <=10) {
                $("#page_6")
                .fadeOut();
                $("#page_7")
                .delay(1000)
                .css('display','flex')
                .hide()
                .empty()
                .append("<div>Please Input A Reasonable Amount</div>")
                .fadeIn(2000)
                $("#page_7")
                .delay(2000)
                .fadeOut();
                $('#page_6')
                .delay(5000)
                .css('display','flex')
                .hide()
                .fadeIn(2000)
        }
            else if(key.which == 13 && $(this).val() >10){
                $("#page_6")
                .fadeOut(1000);
                $("#page_7")
                .delay(1000)
                .css('display','flex')
                .hide()
                .empty()
                .append(`<div id="once">Your Input is \$${$('.input').val()}</div>`)
                .fadeIn(2000)
                $("#page_7")
                .delay(1000)
                .fadeOut(2000);
                $("#page_3")
                .delay(7000)
                .css('display','flex')
                .hide()
                .fadeIn(4000);
                $("#page_3")
                .delay(2000)
                .fadeOut(2000);
                $("#page_8")
                .delay(16000)
                .css('display','flex')
                .hide()
                .fadeIn(4000);
                $("#page_8")
                .delay(1000)
                .fadeOut(2000);
                $("#page_8_")
                .delay(22000)
                .css('display','flex')
                .hide()
                .fadeIn(4000);
                $("#page_8_")
                .delay(5000)
                .fadeOut(2000);
                $("#page_9")
                .delay(32000)
                .css('display','flex')
                .hide()
                .fadeIn(2000);
            }
        });
        $("#page_9 span").click(function() {
            $("#page_9")
            .fadeOut(2000);
            $("#page_10")
            .delay(1000)
            .css('display','flex')
            .hide()
            .fadeIn(4000);
        })
        

    });

});






function slider(){
    var i = setInterval(function() { 
        // var audio = new Audio("../assets/soundEffects/Transition/Sound Effect 1.wav");
        // audio.play();
        $('#page_2 > img:first')
        .next()
        .fadeIn(100)
        .end()
        .appendTo('#page_2');
      }, 50);
      
    setTimeout(function(){
        clearInterval(i); 
        }, 5000);
};


// })

// var i = setInterval(function() { 
//     $('#page_2 > img:first')
//     .next()
//     .fadeIn(100)
//     .end()
//     .appendTo('#page_2');
//   }, 100);
  
// setTimeout(function(){
//     clearInterval(i); 
//     }, 2000);
  
//   $('body').css({'background-color': 'black'});


// $("#page_2 img[src]").on(change ,function () {
//     var audio = {};
//     audio["walk"] = new Audio();
//     audio["walk"].src = "../assets/soundEffects/Transition/Sound Effect 2.wav";
//     audio["walk"].addEventListener('load', function () {
//     audio["walk"].play();
//     });
// });
// $("#book").click(function(){
//     $('div').each(function(){
//     if($(this).css("display") == "none"){
//         $(this).show();
//     }else{
//         $(this).hide();
//     }
// });

// })
// css({"display": 'flex', 'transition': '2s linear'})

// $(function() {
//     $('#page_2 img').each(function () {
//         $(this).attr('src', $(this).attr('src').replace("", "new/directory"));
//     });
// });