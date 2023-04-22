$(document).ready(function () {
  var carousel = $(".carousel");
  var items = $(".item");
  var itemWidth = items.outerWidth(true);
  var currentPosition = 0;
  var maxPosition = items.length - 4;

  var slider = $("#image_list"); // slider = ul element
  var leftProperty, newleftProperty;

  $(".next").click(function () {
    if (currentPosition < maxPosition) {
      currentPosition++;
      carousel.animate({ left: "-=" + itemWidth + "px" }, "fast");
    }
  });

  $(".prev").click(function () {
    if (currentPosition > 0) {
      currentPosition--;
      carousel.animate({ left: "+=" + itemWidth + "px" }, "fast");
    }
  });

  $(".product").click(function () {
    $(this).animate({ backgroundColor: "gray" }, 1000);
  });

  $("#seach-button").click(function () {
    var searchTerm = $("#search-image").val();
    if (!searchTerm) {
      alert("Please enter a term to search");
    } else {
      var flickrApiUrl =
        "https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=" +
        searchTerm;
      $.ajax({
        url: flickrApiUrl, // replace the URL with your API endpoint
        type: "GET",
        dataType: "json", // expected data type
        success: function (responseData) {
          if (responseData && responseData.items) {
            var divData = "";
            responseData.items.forEach(function (item, i) {
              if (i < 4) {
                divData +=
                  "<div class=image-flickr><h2 class=search-title>" +
                  item.title +
                  "</h2><img src=" +
                  item.media.m +
                  "><div class=tag>" +
                  item.tags +
                  "</div></div>";
              }
            });

            $("#images-flickr").html('<div class=search-container>' +divData + '</div>' );
            $("#images-flickr").removeClass("hide");
          }
        },
        error: function (xhr, status, error) {
          console.log("AJAX request failed: " + status + ", " + error);
        },
      });
    }
  });
});
