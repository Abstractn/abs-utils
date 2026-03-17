Changelog
=========

### 1.1.1
* [NEW] Added, `Array.shuffle()`, `Array.remove()`, `Array.removeAll()` and `Array.removeIndex()`, all available as both
* * static `Array` methods that don't mutate the original array
* * prototype methods that mutate original array and return self to support chaining
* [NEW] Added a highly robust implementation of `deepCopy()`
* [NEW] Added `createNode()`
* [EDIT] `setStyle` and `setStyles` now accept type string for `property` param to allow both camel case, kebab case (css-like) and style variables definition
* [FIX] Fixed rgbToHex returning completely incorrect value on inputs lower than double hex digits
* [FIX] Fixed incorrect type for event name in `on()` and `off()`
* [FIX] `randomInt` now swaps `min` and `max` if `min` is greater than `max`
* [FIX] Added missing definitions in README

### 1.1.0

Module codebase:

* [NEW] Added `CHANGELOG.md` file
* [NEW] Added `on()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `off()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added `attr()` extended to `Document`, `Element`, `HTMLElement` and `Node` classes
* [NEW] Added global `setStyle()`
* [NEW] Added global `setStyles()`
* [NEW] Added `randomInt` function to `Math` native class
* [NEW] Added `degToRad` function to `Math` native class
* [NEW] Added `radToDeg` function to `Math` native class
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