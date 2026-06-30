# kwin-focus-obsidian

A KDE Kwin script for task switching to the Obsidian window.

Behavior:
- Bring all open Obsidian windows to the top.
- Make the most recently active Obsidian window the current "active window".

Notes:
- In order to have KWin load a script on each session start the script has to be packaged.
- KWin scripts use the KPackage format.


### Debugging

View debug logs in:
```sh
journalctl -f QT_CATEGORY=js QT_CATEGORY=kwin_scripting
```


# References

KDE development resources:
- [Plasma Desktop scripting | Developer](https://develop.kde.org/docs/plasma/scripting/)
- [KWin scripting tutorial | Developer](https://develop.kde.org/docs/plasma/kwin/)
- [KWin scripting API | Developer](https://develop.kde.org/docs/plasma/kwin/api/)
- [KDE/kpackage](https://invent.kde.org/frameworks/kpackage)
