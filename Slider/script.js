document.addEventListener('DOMContentLoaded', function() {
  var data = '{"months" : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}';
  data = JSON.parse(data);
  var months = data['months'];
  var slider = document.querySelector('.slider');
  for (var j = 0; j < months.length; j++) {
    var sliderComponent = document.createElement('div');
    sliderComponent.innerHTML = months[j];
    sliderComponent.setAttribute('slider-number', j);
    sliderComponent.classList.add('slider-component');
    if (j < 5) sliderComponent.classList.add('shown');
    slider.appendChild(sliderComponent);
  }
  setInterval(function() {
     rotateCarousel();
  }, 40000);

  var slideLeft = document.querySelector('.chevron-left');
  slideLeft.addEventListener('click', rotateCarousel.bind(this, event));
  var slideRight = document.querySelector('.chevron-right');
  slideRight.addEventListener('click', rotateCarousel.bind(this, event));

  function rotateCarousel() {
   if (event) var className = event.target.className;
    var shown = document.querySelectorAll('.shown');
    for (j = 0; j < shown.length; j++) {
      if ((shown[j].getAttribute('slider-number') == 0) && (className === "chevron-left")) {
        className = '';
        return;
      }
      if ((shown[shown.length - 1].getAttribute('slider-number') == months.length - 1) && (className === "chevron-right")) {
          className = '';
          return;
      }
      shown[j].classList.remove('shown');
      if (className === "chevron-left") var start = parseInt(shown[0].getAttribute('slider-number')) - 5;
      else start = parseInt(shown[shown.length - 1].getAttribute('slider-number')) + 1;
    }
    start = start < months.length ? start : 0;
    for (var i = start; i < start + 5; i++) {
      if (i > months.length - 1) {
        return;
      }
      sliderComponent = slider.querySelector("[slider-number='" + i + "']");
      sliderComponent.classList.add('shown');
    }
    return;
  }
});
