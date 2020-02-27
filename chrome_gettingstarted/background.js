// Background scripts, and many other important components, 
// must be registered in the manifest. Registering a background script 
// in the manifest tells the extension which file to reference, 
// and how that file should behave.

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});