document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
    chrome.windows.create({ url: 'https://knowledgesuttra.com/', type: 'panel' });
  }, false);