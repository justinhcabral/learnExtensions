chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

/*
Step by step logic for implementation of tracking the state of the current tab

  After the user clicks the extension action, the extension will check if the URL matches a documentation page. Next, it will check the state of the current tab and set the next state. 
*/

// 1. Define the URLs tro track
const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.com/docs/webstore";

// 2. Listen for the extension action click
chrome.action.onClicked.addListener(async (tab) => {
  // ensure tab and tab.id exist
  if (!tab?.id) return;
  // 3. Check if the tab's URL matches the target URLs
  if (tab.url?.startsWith(extensions) || tab.url?.startsWith(webstore)) {
    // 4. Retrieve the current badge status
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON";
    // 5. Determine the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
