document.addEventListener('DOMContentLoaded', function() {
  var antColony = document.querySelector('.ant-colony');

  for (var i = 0; i < 10; i++) {
    var antDiv = document.createElement('div');
    antDiv.classList.add('ant');
    antDiv.style.top = i * 20 + 'px';
    antDiv.style.left = i * 20 + 'px';
    antColony.appendChild(antDiv);
  }

  var ants = document.querySelectorAll('.ant')
  setInterval(function() {
  moveAnts()}, 400);

  function moveAnts() {
    for (i = 0; i < ants.length; i++) {
      var top = i * 20 + 10 * Math.random();
      var left = i * 20 + 10 * Math.random();
      ants[i].style.top = top + 'px';
      ants[i].style.left = left + 'px';
    }
  }
});



