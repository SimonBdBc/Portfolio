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

  //-----slider work-----//

  var li = $(".slider_image");
  var actuelle_image = 0;
  var total_li = li.length;
  li.hide();
  li.eq(actuelle_image).show();

  function next_li() {
    var ancienne_image = actuelle_image;
    actuelle_image++;
    if (actuelle_image > total_li - 1) {
      actuelle_image = 0;
    };
    li.eq(ancienne_image).fadeOut(1000);
    li.eq(actuelle_image).fadeIn(1000);
    $(".text_slide1").hide();
    $(".text_slide2").hide();
    $(".text_slide3").hide();
    $(".text_slide4").hide();
  };

  interval = setInterval(function() {
    next_li()
  }, 3000);

  $('button[data-action="but1"]').on('click', function() {
    if (actuelle_image != 0)
      ancienne_image = actuelle_image;
    actuelle_image = 0;
    clearInterval(interval);
    li.eq(ancienne_image).fadeOut(1000);
    li.eq(actuelle_image).fadeIn(1000);
    $(".text_slide1").show(250);
  });
  $('button[data-action="but2"]').on('click', function() {
    if (actuelle_image != 1)
      ancienne_image = actuelle_image;
    actuelle_image = 1;
    clearInterval(interval);
    li.eq(ancienne_image).fadeOut(1000);
    li.eq(actuelle_image).fadeIn(1000);
    $(".text_slide2").show(250);
  });
  $('button[data-action="but3"]').on('click', function() {
    if (actuelle_image != 2)
      ancienne_image = actuelle_image;
    actuelle_image = 2;
    clearInterval(interval);
    li.eq(ancienne_image).fadeOut(1000);
    li.eq(actuelle_image).fadeIn(1000);
    $(".text_slide3").show(250);
  });
  $('button[data-action="but4"]').on('click', function() {
    if (actuelle_image != 3)
      ancienne_image = actuelle_image;
    actuelle_image = 3;
    clearInterval(interval);
    li.eq(ancienne_image).fadeOut(1000);
    li.eq(actuelle_image).fadeIn(1000);
    $(".text_slide4").show(250);
  });
  $('button[data-action="but5"]').on('click', function() {
    interval = setInterval(function() {
      next_li()
    }, 3000);
  });

  $(".slider_image").hover(function() {
    clearInterval(interval);
  }, function() {
    interval = setInterval(function() {
      next_li()
    }, 3000);
  });
  $(".image1").hover(function() {
    $(".text_slide1").show(250);
  }, function() {
    $(".text_slide1").hide(250);
  });
  $(".image2").hover(function() {
    $(".text_slide2").show(250);
  }, function() {
    $(".text_slide2").hide(250);
  });
  $(".image3").hover(function() {
    $(".text_slide3").show(250);
  }, function() {
    $(".text_slide3").hide(250);
  });
  $(".image4").hover(function() {
    $(".text_slide4").show(250);
  }, function() {
    $(".text_slide4").hide(250);
  });

  $(".image1").on('click', function() {
    window.open('./projets/projet1-rps/index.html');
  });
  $(".image2").on('click', function() {
    window.open('');
  });
  $(".image3").on('click', function() {
    window.open('');
  });
  $(".image4").on('click', function() {
    window.open('');
  });
});
