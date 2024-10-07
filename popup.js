document.getElementById('linkButton').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://edcube.neocities.org/mainpage' });
  });
  