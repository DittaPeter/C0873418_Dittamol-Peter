$(document).ready(function() {
    var carousel = $(".carousel");
    var items = $(".item");
    var itemWidth = items.outerWidth(true);
    var currentPosition = 0;
    var maxPosition = items.length - 4;
    
    
    $(".next").click(function() {
      if (currentPosition < maxPosition) {
        currentPosition++;
        carousel.animate({ left: "-=" + itemWidth + "px" }, "fast");
      }
    });
  
    $(".prev").click(function() {
      if (currentPosition > 0) {
        currentPosition--;
        carousel.animate({ left: "+=" + itemWidth + "px" }, "fast");
      }
    });
  });