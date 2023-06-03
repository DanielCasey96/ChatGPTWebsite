// JavaScript code
window.onload = function() {
  var isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = 'This is a mobile device!';
    document.body.appendChild(popup);
  }
};
