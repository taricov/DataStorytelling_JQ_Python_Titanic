// $(document).ready(function(){

//     var images = $('img'),
//         count = images.length,
//         transitions = 1;
        
//     TweenMax.set(images, {autoAlpha:0});
//     TweenMax.set($(".active"), {autoAlpha:1});
    
//     function fadeImage()
//     {
//       var active = $(".active"),
//             next = active.next();
        
//         TweenMax.set(active, {autoAlpha:0, className:"-=active"});
//         TweenMax.set(next, {autoAlpha:1, className:'+=active', onComplete:nextImage});
        
//         transitions++;
        
//         console.log(transitions);
//     }
    
//     setTimeout(fadeImage,1000);
    
//     function nextImage()
//     {
//         if(transitions < count)
//         {
//             setTimeout(fadeImage,1000);
//         }
//         else
//         {
//             transitions = 0;
//             TweenMax.set(images[0], {autoAlpha:1, className:'+=active'});
//             setTimeout(fadeImage,1000);
//         }
//     }
    
//     });




$(".container > img:gt(0)").hide();

// setInterval(function() { 
//   $('.container > img:first')
//   .next()
//   .fadeIn(100)
//   .end()
//   .appendTo('.container');
// }, 100);

var i = setInterval(function() { 
    $('.container > img:first')
    .next()
    .fadeIn(100)
    .end()
    .appendTo('.container');
  }, 100);
  
setTimeout(function(){
    clearInterval(i); 
    }, 2000);
  
  $('body').css({'background-color': 'black'});