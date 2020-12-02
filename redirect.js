var browser = browser || chrome;

function redirect(tab) {
    var prior_url = tab.url;
    if (prior_url.includes("www.nytimes.com")) {
        var updated_url = prior_url.replace("www.nytimes.com", "www-nytimes-com.research.aadl.org");
        chrome.tabs.update(tab.id, {url: updated_url});
    }
    else if (prior_url.includes("www-nytimes-com.research.aadl.org")) {
        var updated_url = prior_url.replace("www-nytimes-com.research.aadl.org", "www.nytimes.com");
        chrome.tabs.update(tab.id, {url: updated_url});
    }
};

chrome.pageAction.onClicked.addListener(redirect);

function checkForValidUrl(tabId, changeInfo, tab) {
    // If the letter 'g' is found in the tab's URL...
    if (tab.url.includes("www.nytimes.com") || tab.url.includes("www-nytimes-com.research.aadl.org")) {
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
