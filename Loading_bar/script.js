document.addEventListener('DOMContentLoaded', function() {
  var data = 0;

  var loadProgress = document.querySelector("[data-widget='load-progress']");
  loadProgress.addEventListener('animationstart', function() {
    loadProgress.style.backgroundColor = 'green';
  });

  var progressPercent = document.querySelector("[data-widget='progress-percent']");

  var loadTimer = setInterval(function() {
    changeProgress();
  }, 1000);
  function changeProgress() {
    if (data === 200) {
      clearInterval(loadTimer);
      return;
    }
    data = data + 25;
    loadProgress.style.width = data + 'px';
    progressPercent.innerHTML = '<strong>' + Math.floor(data / 2) + '% </strong>';
    progressPercent.style.width = data + 'px';
    progressPercent.style.left = data + 'px';
  }
});
