# Side-by-side Reader (no Google, no cloud)

## Host / install
Upload this folder to any free HTTPS host (Netlify Drop, GitHub Pages). Open the link in Chrome/Edge -> "Install app".
Nothing is sent anywhere: all data stays on your device.

## Storage (zip files)
- First launch shows one button: "Choose storage folder…". It opens your file picker right away; pick a folder and confirm, that's it.
- Every change is saved automatically as one `.zip` per project in that folder (project.json + original images).
- ⋮ menu -> "Change storage path…": pick any new folder; all project zips are moved there and removed from the old folder.
- After reinstalling: choose the same folder again, all projects in it load automatically.
  Or use the ⋮ menu on the home page -> "Add project zip files".
- Android Chrome / iPhone do not let web apps write to a folder you choose. There the app keeps projects inside
  the app and you use ⋮ -> "Export all as zip" (saved to Downloads) as your copy.

## Importing
Projects ⋮ (home or inside a project) -> "Import project (zip)…": pick a project .zip from anywhere on your device; it is added and opened straight away.

## Sharing
Project ⋮ -> Share… -> "Project as ZIP". The receiver opens the zip with the app (Android installed app: it appears in the
share sheet; desktop: double-click / Open with) or uses ⋮ -> "Add project zip files".

## Gestures
- Columns fill the screen edge to edge (a 1px divider only) with a slim header. Images always fill the full column width.
- **Lock** (padlock in the top bar): blue = locked. Clicking it never moves a single image. While locked, all columns scroll as ONE (a single scroller, so they cannot drift); blank space above/below a column is simply scrolled through. Unlock and everything stays exactly where it was until you scroll a column. The setting is remembered per project.
- **Hold / long-press menu and drag-reorder** only work when the project is unlocked AND the page is at its original size (not pinch-zoomed even slightly). Right-click on desktop follows the same rule.
- **Full screen** (arrows icon next to the column title): the column fills the screen and keeps your reading position. Tap the icon again (now "shrink"), press the phone Back button, or press Esc to return to the normal side-by-side view exactly as you left it.
- Pinch anywhere (two fingers) to zoom the whole page; the browser re-draws images at the zoomed size, so they stay sharp. Drag to move around the zoomed page; when a column is at its top/bottom the drag carries on to move the page. Pinch back out to return to normal. (On desktop use Ctrl + scroll or Ctrl + / Ctrl -.)
- Tap an image: open full-screen viewer (at normal page size). Swipe left/right to change photo, swipe up/down to close, phone Back button also closes it. Pinch or double-tap to zoom the photo, drag to move around.
- Text blocks: tap "T" to add one (or tap an existing block to edit it). While editing, ✕ throws the changes away and ✓ saves them. (Ctrl+Enter saves, Esc cancels on desktop.)
- Long-press an image or text block (right-click on desktop) and release: Copy, Delete (asks to confirm), and — once something is copied — Paste below, which inserts a copy right under the item you pressed (works in any column or project).
- Long-press, keep holding and move: drag the image to any position in the same or another column, then let go.

## Long-press
A long-press (about half a second) only counts when your finger stays still and nothing is scrolling. Holding the screen while you scroll, or touching a list that is still gliding, is never treated as a long-press and never opens the menu.

## Speed
Big photos are shown in the columns as a resized copy (made once in the background and remembered); the original file is always kept untouched for the full-screen viewer, sharing and the zip. Saving no longer re-reads every image each time.

## Folder permission
The browser, not the app, decides how long folder access lasts. The app asks once, on your first tap of a visit, and only if access was lost. In Chrome/Edge choose **"Allow on every visit"** in that prompt and it will stop asking on this device.
