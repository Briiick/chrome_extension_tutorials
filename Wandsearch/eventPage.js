var menuItem = {
    "id": "wandsearch",
    "title": "Wikiwand!",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "wandsearch" && clickData.selectionText){
        var wikiURL = "https://www.wikiwand.com/en/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiURL,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": parseInt(screen.availWidth/2),
            "height": parseInt(screen.availHeight/2)
        };
        chrome.windows.create(createData, function(){});
    }
})