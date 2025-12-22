MQL5 CodeBase ZIP Downloader

Overview
- Downloads all files from any `mql5.com/*/code/*` publication into a single ZIP.
- Preserves the folder structure exactly as shown in the publication groups (e.g. `MQL5/Indicators/...`).
- Ignores the built-in "Download as ZIP" button and collects the latest files directly from their links.

Install
- Open `chrome://extensions`.
- Enable `Developer mode`.
- Click `Load unpacked` and select the project root (folder containing `manifest.json`).
- Optional for testing local sample: enable `Allow access to file URLs` in the extension details.

Use
- Open any CodeBase page, e.g. `https://www.mql5.com/en/code/22166` or `https://www.mql5.com/ru/code/65527`.
- Click the extension icon or the injected "Download CodeBase ZIP" button near the attachments block.
- The extension expands hidden items and downloads a ZIP with correct paths.

Sample Page
- Open `page_example/Free download of the 'TradeTransactions'...html` in Chrome.
- Click the extension icon or the injected button.
- A ZIP download starts containing 11 files across 4 folders.

Notes
- The extension uses page authentication; ensure you are logged in to access downloads if required.
- Folder paths are taken from group headers displayed on the page.

