$(document).ready(function(){


        
    $(".nextIndicator").on("click", function(e){

        var currentImage = $(".image-up");
        var nextImage = currentImage.next();

        $(function(){
    $('.carousel-in img:gt(0)').hide();
    setInterval(function(){
      $('.carousel-in :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.carousel-in');}, 
      3000);
    });

    
        if(nextImage.length == 0)
        {
            nextImage = $(".carousel-in img").first();
        }

        currentImage.removeClass("image-up").addClass("image-down").css("z-index", -10);
        nextImage.addClass("image-up").removeClass("image-down").css("z-index", 20);
        $(".carousel-in img").not([currentImage, nextImage]).css("z-index", 1);

        e.preventDefault();
    });

    $(".previousIndicator").on("click", function(l){
        var currentImage = $(".image-up");
        var nextImage = currentImage.prev();

        if(nextImage.length == 0)
        {
            nextImage = $(".carousel-in img").last(l);
        }
        currentImage.removeClass("image-up").addClass("image-down").css("z-index", -10);
        nextImage.addClass("image-up").removeClass("image-down").css("z-index", 20);
        $(".carousel-in img").not([currentImage, nextImage]).css("z-index", 1);

        l.preventDefault();
    })

    });
});