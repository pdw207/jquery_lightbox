
// Image Gallery
var $preview = $('<div id="preview"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Build preview
$image.attr("width", "750");
$preview.append($image);
$preview.append($caption);
$("body").append($preview);



var updateImage = function(event){
  event.preventDefault();
  $preview.show();

  // Create an array of images in gallery
  var links = jQuery.makeArray($("#imageGallery").find('a'));
  var index = links.indexOf(this);

  // Update caption and image function
  var updateImageFromArray = function(){
    $image.attr("src", links[index]);
    var captionText = $(links[index]).children("img").attr("alt");
    $caption.text(captionText);
  };


  updateImageFromArray();

 // Move through gallery with keypress with gallery is active
 $("body").keydown(function(event) {

    lastIndex = links.length -1
    if(event.keyCode == 37) {
      // left key go to previous photo (wrap around to last)
      if (index > 0){
        --index;
      }else{
        index = lastIndex;
      };
      updateImageFromArray();

    } else if(event.keyCode == 39){
      // Right key got to next photo(wrap around to first)
      if (index < lastIndex){
        ++index;
      }else{
        index = 0;
      };
      updateImageFromArray();
    }
  });
};

//Capture the click event on a link to an image
$("#imageGallery a").click(updateImage);

$preview.click(function(){
  $preview.hide();
});










