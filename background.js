
// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
 chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var documentUrlPatterns = ["https://app.getsling.com/*"]
    var title = "Reply";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts":[context],
        "id": "slingtor_copy_" + context,
        "documentUrlPatterns": documentUrlPatterns
    });
    
  });

// The onClicked callback function.
function onClickHandler(info, tab) {
    if (info.menuItemId == "slingtor_copy_selection") {
        chrome.tabs.sendMessage(tab.id, {action: "sling-reply", text: info.selectionText});  
    }
};