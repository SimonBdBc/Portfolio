$(document).ready(function() {
  var totalSize = $('.img-slider').width() * $('.img-slider').length;
  var oneSize = $('.img-slider').width();
  if(localStorage.getItem('currentSize') == null) {
    localStorage.setItem('currentSize', 0);
  } else {
    $('.slider').css('transform', 'translateX(-' + localStorage.getItem('currentSize') + 'px)');
  }
  $('button[data-action="left"], button[data-action="right"]').on('click', function() {
    var direction = $(this).data('action');
    if(direction == 'right') {
      if(parseInt(localStorage.getItem('currentSize')) + oneSize < totalSize) {
        localStorage.setItem('currentSize', parseInt(localStorage.getItem('currentSize')) + oneSize);
        $('.slider').css('transform', 'translateX(-' + localStorage.getItem('currentSize') + 'px)');
      } else {
        $('.slider').css('transform', 'translateX(0px)');
        localStorage.setItem('currentSize', 0);
      }
      console.log('A Droite');
    } else {
      if(parseInt(localStorage.getItem('currentSize')) - oneSize < 0) {
        localStorage.setItem('currentSize', totalSize - oneSize);
        $('.slider').css('transform', 'translateX(-' + localStorage.getItem('currentSize') + 'px)');
      } else {
        localStorage.setItem('currentSize', parseInt(localStorage.getItem('currentSize')) - oneSize);
        $('.slider').css('transform', 'translateX(-' + localStorage.getItem('currentSize') + 'px)');
      }
    };
  });

});
