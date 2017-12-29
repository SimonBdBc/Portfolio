$(document).ready(function(){

var li = $(".slider_image");
var actuelle_image = 0;
var total_li = li.length;
li.hide();
li.eq(actuelle_image).show();

function next_li(){
  var ancienne_image = actuelle_image;
  actuelle_image++;
  if(actuelle_image > total_li-1){
    actuelle_image = 0;
  };
  li.eq(ancienne_image).fadeOut(1500);
  li.eq(actuelle_image).fadeIn(1500);
};

interval = setInterval(function(){next_li()},2000);

$('button[data-action="but1"]').on('click', function(){
  ancienne_image = actuelle_image;
  actuelle_image = 0;
  clearInterval(interval);  
  li.eq(ancienne_image).fadeOut(1000);
  li.eq(actuelle_image).fadeIn(1000);
});
$('button[data-action="but2"]').on('click', function(){
  ancienne_image = actuelle_image;
  actuelle_image = 1;
  clearInterval(interval);  
  li.eq(ancienne_image).fadeOut(1000);
  li.eq(actuelle_image).fadeIn(1000);
});
$('button[data-action="but3"]').on('click', function(){
  ancienne_image = actuelle_image;
  actuelle_image = 2;
  clearInterval(interval);  
  li.eq(ancienne_image).fadeOut(1000);
  li.eq(actuelle_image).fadeIn(1000);
});
$('button[data-action="but4"]').on('click', function(){
  ancienne_image = actuelle_image;
  actuelle_image = 3;
  clearInterval(interval);
  li.eq(ancienne_image).fadeOut(1000);
  li.eq(actuelle_image).fadeIn(1000);
});
$('button[data-action="but5"]').on('click', function(){
  interval = setInterval(function(){next_li()},2000);
});

$(".slider_image").hover(function(){
  clearInterval(interval);
}, function(){
  interval = setInterval(function(){next_li()},2000);
});

$(".image1").on('click', function(){
  window.open('');
});
$(".image2").on('click', function(){
  window.open('');
});
$(".image3").on('click', function(){
  window.open('');
});
$(".image4").on('click', function(){
  window.open('');
});


});
