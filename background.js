chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.tabs.getSelected(function(tab){
        chrome.runtime.sendMessage(tab.url, function(response){
            
        });
    });
    
});