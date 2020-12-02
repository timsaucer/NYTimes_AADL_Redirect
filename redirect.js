function redirect(tab) {
    var prior_url = tab.url;
    if (prior_url.includes("www.nytimes.com")) {
        var updated_url = prior_url.replace("www.nytimes.com", "www-nytimes-com.research.aadl.org");
        browser.tabs.update(tab.id, {url: updated_url});
    }
    else if (prior_url.includes("www-nytimes-com.research.aadl.org")) {
        var updated_url = prior_url.replace("www-nytimes-com.research.aadl.org", "www.nytimes.com");
        browser.tabs.update(tab.id, {url: updated_url});
    }
};

browser.pageAction.onClicked.addListener(redirect);
