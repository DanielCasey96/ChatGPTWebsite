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

function showDialog(dialogId) {
  var dialog = document.getElementById(dialogId);
  if (dialog) {
    dialog.style.display = 'block';
  }
}

function closeDialog(dialogId) {
  var dialog = document.getElementById(dialogId);
  if (dialog) {
    dialog.style.display = 'none';
  }
}
