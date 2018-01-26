document.addEventListener('DOMContentLoaded', function() {
  var postBody = document.querySelector('.post-body');

  function getData() {
    var count = Math.floor(Math.random() * 2);
    var posts = []
    for (var i = 0; i <= count; i++) {
      var name = generateRandom(5);
      var post = generateRandom(20);
      posts.push({"user" : name, "post" : post});
    }
    return posts;
  }

  function generateRandom(length) {
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz.1234567890";
   var text = "";
   for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * possible.length);
    text += possible[index];
   }
   return text;
  }

  function createPostDiv(posts) {
      posts.forEach(function(item) {
      var postDetailsDiv = document.createElement('div');
      var nameDiv = document.createElement('div');
      var postDiv = document.createElement('div');
      var name = item['user'];
      var post = item['post'];
      nameDiv.innerHTML = name;
      nameDiv.classList.add('name-div');
      postDiv.innerHTML = post;
      postDiv.classList.add('post-div');
      postDetailsDiv.classList.add('post-details');
      postDetailsDiv.appendChild(nameDiv);
      postDetailsDiv.appendChild(postDiv);
      postBody.appendChild(postDetailsDiv);
    });
  }

  setInterval(function() {
    var posts = getData(); 
    createPostDiv(posts);
  }, 2000);
});
