function focusObsidianWindows() {
  // workspace.stackingOrder returns all windows sorted from bottom to top
  const stack = workspace.stackingOrder;
  const obsidianWindows = [];

  // 1. Find all Obsidian windows and maintain their existing relative order
  for (let i = 0; i < stack.length; i++) {
    const w = stack[i];
    // Check if the resource class exists and matches Obsidian
    if (w.resourceClass && w.resourceClass.toLowerCase() === "obsidian") {
      obsidianWindows.push(w);
    }
  }

  // debugging
  //print(stack.length);
  //print(obsidianWindows.length);

  // If there are no Obsidian windows, do nothing
  if (obsidianWindows.length === 0) {
    return;
  }

  // 2. Bring Obsidian windows to the front one by one
  // Because we iterate bottom-to-top, the original top-most window is activated last,
  // retaining its position at the absolute top of the stack with active focus.
  for (let j = 0; j < obsidianWindows.length; j++) {
    workspace.activeWindow = obsidianWindows[j];
  }
}

focusObsidianWindows();
