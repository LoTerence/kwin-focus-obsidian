#!/bin/bash

# 1. If the script already exists, delete it
rm -rf /home/"$USER"/.local/share/kwin/scripts/kwin-focus-obsidian

# 2. Create script folder
mkdir /home/"$USER"/.local/share/kwin/scripts/kwin-focus-obsidian

# 3. Copy only necessary contents of this repo into script folder.
cp -rv contents metadata.json /home/"$USER"/.local/share/kwin/scripts/kwin-focus-obsidian