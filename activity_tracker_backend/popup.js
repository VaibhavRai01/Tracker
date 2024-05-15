// popup.js
document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('websiteData', function(data) {
    // Display website data in popup HTML
    console.log(data);
  });
});
