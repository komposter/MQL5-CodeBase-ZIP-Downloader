chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return
  try {
    await chrome.tabs.sendMessage(tab.id, { type: 'MQL5_CODEBASE_ZIP_DOWNLOAD' })
  } catch (e) {
    try {
      await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content.js'] })
      await chrome.tabs.sendMessage(tab.id, { type: 'MQL5_CODEBASE_ZIP_DOWNLOAD' })
    } catch (err) {}
  }
})

