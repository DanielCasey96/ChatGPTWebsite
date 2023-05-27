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
  