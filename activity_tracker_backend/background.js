// background.js

// Object to store URL visit data
let urlData = {};

// Listen for message from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'urlChanged') {
    f(message); // Pass message object as argument to f function
  }
});

function f(message) {
  const url = message.url;
  const timestamp = Date.now();

  // Check if URL data already exists
  if (urlData[url]) {
    // Calculate time spent in minutes
    const timeSpentMinutes = (timestamp - urlData[url].lastVisit) / (1000 * 60);
    // Update time spent on URL
    urlData[url].timeSpent += timeSpentMinutes;

    // Check if time spent exceeds threshold
    if (urlData[url].timeSpent > 1) {
      // Show warning notification
      chrome.notifications.create('warning', {
        type: 'basic',
        title: 'ALERT',
        iconUrl: 'icon.png',
        message: `You have spent more than 1 minute on ${url}.`
      });
    }
  } else {
    // Initialize URL data
    urlData[url] = { timeSpent: 0, lastVisit: timestamp };
  }

  // Save updated URL data to Chrome storage
  chrome.storage.local.set({ 'urlData': urlData }, () => {
    console.log('URL data saved:', urlData);
  });
}
