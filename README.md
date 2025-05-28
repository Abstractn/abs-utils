# Abs-Utilities (Abs-Utils)

[![npm version](https://badgen.net/npm/v/abs-utilities)](https://www.npmjs.com/package/abs-utilities) [![Install size](https://packagephobia.com/badge?p=abs-utilities)](https://packagephobia.com/result?p=abs-utilities)

## Introduction:

This module is a simple collection of common functions.
Check out the `dist/abs-utils.d.ts` file for a summary of what it contains.

> "If I could marry a mathematical formula, it would be `proportionalRange()`."
> -Abstractn, 2019

This collection will be expanded in the future following my personal necessities.


## CDN:

Typescript:
```https://abstractn.github.io/lib/abs-utils.ts```

Javascript (with export):
```https://abstractn.github.io/lib/abs-utils.js```

Javascript (without export):
```https://abstractn.github.io/lib/abs-utils.nx.js```

Browser iclusion:
```<script src="https://abstractn.github.io/lib/abs-utils.nx.js"></script>```

## Library:

- ### proportionalRange
  - `oldMin: number`
  - `oldMax: number`
  - `newMin: number`
  - `newMax: number`
  - `value: number`
  - returns `number`

- ### rgbToHex
  - `r: number`
  - `g: number`
  - `b: number`
  - returns `string | null`

- ### randomInt
  - `min?: number`, default is `0`
  - `max?: number`, default is `1`
  - returns `number`

- ### getNode
  - `query: string`
  - `context?: HTMLElement`, default is `document`
  - returns `HTMLElement | null`

- ### getNodes
  - `query: string`
  - `context?: HTMLElement`, default is `document`
  - returns `Array<HTMLElement> | null`

- ### setStyle
  - `element: HTMLElement`
  - `property: K`
  - `value: CSSStyleDeclaration[K]`

- ### setStyles
  - `element: HTMLElement`
  - `properties: Record<K, CSSStyleDeclaration[K]>`

- ### Element.on
  - `eventType: keyof ElementEventMap`
  - `callback: EventListenerOrEventListenerObject`

- ### Element.off
  - `eventType: keyof ElementEventMap`
  - `callback: EventListenerOrEventListenerObject`

- ### Element.attr
  - `attributeName: string`
  - `value?: string`
  - returns `string` if `value` is missing
  - returns `undefined` if `value` is passed
