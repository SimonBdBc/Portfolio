$(document).ready(function() {

  //-----slider skill-----//

  setInterval(function() {
    $(".slider_logo ul").animate({
      marginLeft: -250
    }, 2000, function() {
      $(this).css({
        marginLeft: 0
      }).find("li:last").after($(this).find("li:first"));
    });
  }, 1000);
});