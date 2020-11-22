$(document).ready(function()
{
    var count = 0;
    var images = ["backgroundFP1.jpg","bg1.jpg","bg2.jpg","bg3.jpg"];
    var image = $(".banner-image")

    image.css("background","url("+images[count]+")");

    setInterval(function(){
      image.fadeOut(500, function(){
        image.css("background","url("+images[count++]+")");
        image.fadeIn(500);
      });
      if(count == images.length)
      {
        count = 0;
      }
    },5000);
});
