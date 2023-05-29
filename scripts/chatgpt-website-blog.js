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

  window.addEventListener('load', function() {
    var expandBtn = document.getElementById('expandBtn');
    var expandContent = document.getElementById('expandContent');
  
    expandBtn.addEventListener('click', function() {
      if (expandContent.style.display === 'none') {
        expandContent.style.display = 'block'; // Show the content
        expandContent.style.maxHeight = expandContent.scrollHeight + 'px'; // Set the max height to the scroll height
  
        // Smooth scroll animation
        expandContent.style.transition = 'max-height 0.3s ease-in-out';
      } else {
        expandContent.style.maxHeight = '0'; // Set the max height to 0
  
        // Delay hiding the content until the animation finishes
        setTimeout(function() {
          expandContent.style.display = 'none'; // Hide the content
        }, 300); // Adjust the duration (in milliseconds) as needed
      }
    });
  });
  
  
  