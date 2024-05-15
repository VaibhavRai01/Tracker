// content.js
const currentUrl = window.location.href;

// Send message to background script with current URL
chrome.runtime.sendMessage({ type: 'urlChanged', url: currentUrl });
