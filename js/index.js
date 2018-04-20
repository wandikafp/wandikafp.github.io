$(function() {
  var sizeSections = function() {
    var viewHeight = $(window).height();
    $("section").each(function(){
      var naturalHeight = $(this).find(".content").outerHeight();
      if ( naturalHeight > viewHeight) {
        $(this).css("height", "auto");
      } else {
        $(this).css("height", viewHeight + "px");
      }
    });
  }
  
  sizeSections();
  $('.navbar a').smoothScroll();
  $(window).resize(function() {
    sizeSections();
  });
});