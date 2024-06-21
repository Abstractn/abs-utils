Changelog
=========

### 1.1.0

Module codebase:

* [NEW] Added `CHANGELOG.md` file
* [NEW] Added `on()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `off()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `attr()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added global `setStyle()`
* [NEW] Added global `setStyles()`
* [EDIT] `proportionalRange()` now has a single `config: ProportonalRangeConfig` parameter overload without breaking the previous usage
* [EDIT] Updated `setStyle()` parameter types
* [EDIT] Updated `setStyle()` implementation to use global function
* [EDIT] Updated `setStyles()` parameter types
* [EDIT] Updated `setStyles()` implementation to use global function

Repository management:

* [EDIT] For ease of setup the module "copyfiles" has been replaced with the use of "fs-extra", "glob" and a new build util file dedicated to copying files; the build script has been edited accordingly

### 1.0.2

* [NEW] Added `LICENSE` file

### 1.0.1

* [NEW] Added `README.md` file

### 1.0.0

* Initial port from non-module files
* [NEW] Added global `proportionalRange()`
* [NEW] Added global `rgbToHex()`
* [NEW] Added global `randomInt()`
* [NEW] Added `getNode()` as global and extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `getNodes()` as global and extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `setStyle()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `setStyles()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes