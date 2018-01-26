document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('img');
  var zoom = document.querySelector('.zoom');
  image.addEventListener('mouseenter', function() {
  	zoom.classList.add('shown');
  });
  image.addEventListener('mouseleave', function() {
  	zoom.classList.remove('shown');
  });
  image.addEventListener('mousemove', function(ev) {
  	zoom.style.backgroundPosition = -ev.clientX + 'px ' + -ev.clientY + 'px';
  });
});
