// Fetch the content from the aboutText file
fetch('aboutText.txt')
  .then(response => response.text())
  .then(data => {
    // Insert the content into the element with the specified ID
    document.getElementById('aboutText').innerHTML = data;
  });

  // Fetch the content from the ChatGPTText file
fetch('chatGPTText.txt')
.then(response => response.text())
.then(data => {
  // Insert the content into the element with the specified ID
  document.getElementById('chatGPTText').innerHTML = data;
});

$(document).ready(function() {
  // Fetch the content of the blog post using AJAX
  $.ajax({
    url: 'blog-content/chatgpt-blog-content.html',
    method: 'GET',
    success: function(response) {
      // Once the content is fetched, insert it into the container
      $('#chatgpt-blog-content').html(response);
    },
    error: function() {
      console.log('Error loading blog post.');
    }
  });
});
