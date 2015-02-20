$(document).ready(function(){
        
        function slide(){

  $(".nextIndicator").click();
}
var intervalId = window.setInterval(slide, 5000);

    $(".nextIndicator").on("click", function(e){

        var currentImage = $(".image-up");
        var nextImage = currentImage.next();
    

    
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
});$(document).ready(function(){
        
        function slide(){

  $(".nextIndicator").click();
}
var intervalId = window.setInterval(slide, 5000);

    $(".nextIndicator").on("click", function(e){

        var currentImage = $(".image-up");
        var nextImage = currentImage.next();
    

    
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