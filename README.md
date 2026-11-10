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

## Sharing
Project ⋮ -> Share… -> "Project as ZIP". The receiver opens the zip with the app (Android installed app: it appears in the
share sheet; desktop: double-click / Open with) or uses ⋮ -> "Add project zip files".

## Gestures
- Tap an image: open full-screen viewer. Swipe left/right to change photo, swipe up/down to close (like a gallery), phone Back button also closes it. Pinch or double-tap to zoom, drag to move around.
- Pinch an image inside a column (Ctrl + scroll on desktop): only that image zooms; drag to pan. Tap the ↺ chip (or tap the image) to reset.
- Long-press an image (right-click on desktop) and release: Delete option (always asks to confirm).
- Long-press, keep holding and move: drag the image to any position in the same or another column, then let go.
