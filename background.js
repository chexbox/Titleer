chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript(null, {code: "document.title = Math.round(Math.random() * 1000000)"});
    };
});
chrome.commands.onCommand.addListener(function(title) {
  chrome.tabs.executeScript(null, {code: "document.title = Math.round(Math.random() * 1000000)"});
});
chrome.commands.onCommand.addListener(function(edit) {
  chrome.tabs.executeScript(null, {code: "document.designMode='on';"});
});