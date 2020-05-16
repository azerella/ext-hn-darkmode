function isHackerNews(url) {
  return new URL(url.host === 'news.ycombinator.com');
}

chrome.tabs.getCurrent((tab) => {
  if (isHackerNews(tab.url)) {
    console.log(`yay`);
  }
})