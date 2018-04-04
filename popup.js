chrome.tabs.executeScript(null, {code: "document.title = Math.round(Math.random() * 1000000)"});
document.write('Attempted to title tab.')