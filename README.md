# kwin-focus-obsidian

A KDE Kwin script that adds a keyboard shortcut to task switch directly to the [Obsidian](https://obsidian.md/) window.

Behavior:
- Bring all open Obsidian windows to the top.
- Make the most recently active Obsidian window the current "active window".
- Default keyboard shortcut: `Meta+O`


### Deployment Instructions

In order to have KWin load a script on each graphical session start, the script has to be packaged. KWin scripts use the KPackage format.


To install and activate this script in my KDE:
1. Run `install.sh` to copy the KPackage files into the local `/kwin/scripts` folder
2. Restart the KDE graphical session to apply changes. (ie. log out and log back in)


### Debugging

View debug logs in:
```sh
journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting
```

You can run development scripts in the interactive "Kwin Debug Console".


# References

Example of a similar script - MinimizeAll:
- MinimizeAll is a default script bundled with the window manager. It can be found in the Kwin repository
- Description: Adds a shortcut to minimize and restore all windows.
- Link: https://invent.kde.org/plasma/kwin/-/blob/master/src/plugins/minimizeall/package/contents/code/main.js


KDE script development resources:
- [Plasma Desktop scripting | Developer](https://develop.kde.org/docs/plasma/scripting/)
- [KWin scripting tutorial | Developer](https://develop.kde.org/docs/plasma/kwin/)
- [KWin scripting API | Developer](https://develop.kde.org/docs/plasma/kwin/api/)
- [KDE/kpackage](https://invent.kde.org/frameworks/kpackage)
