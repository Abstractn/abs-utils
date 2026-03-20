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

- ### ProportionalRangeConfig
  - `oldMin: number`
  - `oldMax: number`
  - `newMin: number`
  - `newMax: number`
  - `value: number`

- ### proportionalRange
  - `oldMin: number`
  - `oldMax: number`
  - `newMin: number`
  - `newMax: number`
  - `value: number`
  - returns `number`

- ### proportionalRange
  - `config: ProportionalRangeConfig`
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

- ### degToRad
  - `degrees: number`
  - returns `number`

- ### radToDeg
  - `radians: number`
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
  - `property: string` (allows camel case, kebab case and style variables)
  - `value: string`

- ### setStyles
  - `element: HTMLElement`
  - `properties: Record<string, string>` (keys allow camel case, kebab case and style variables)

- ### Element.on
  - `eventType: string`
  - `callback: EventListenerOrEventListenerObject`

- ### Element.off
  - `eventType: string`
  - `callback: EventListenerOrEventListenerObject`

- ### Element.attr
  - `attributeName: string`
  - `value?: string`
  - returns `string` if `value` is missing
  - returns `undefined` if `value` is passed

- ### deepCopy
  - `src: T`
  - returns `T`

- ### createNode
  - `tag: string`
  - `attributes?: Record<string, string>`
  - `content?: string | number | HTMLElement | Array<HTMLElement>`
  - `callback?: ((element: HTMLElement) => void`
  - returns `HTMLElement`

- ### Math.randomInt
  - `min?: number`, default is `0`
  - `max?: number`, default is `1`
  - returns `number`

- ### Math.degToRad
  - `degrees: number`
  - returns `number`

- ### Math.radToDeg
  - `radians: number`
  - returns `number`

- ### Array.shuffle (static)
  - `array: Array<T>`
  - returns `Array<T>`
  - does not mutate original array

- ### Array.shuffle (prototype)
  - mutates original array

- ### Array.remove (static)
  - `array: Array<T>`
  - `predicate: (value: T, index: number, array: Array<T>) => boolean`
  - returns `Array<T>`
  - does not mutate original array

- ### Array.remove (prototype)
  - `predicate: (value: T, index: number, array: Array<T>) => boolean`
  - mutates original array

- ### Array.removeAll (static)
  - `array: Array<T>`
  - `predicate: (value: T, index: number, array: Array<T>) => boolean`
  - returns `Array<T>`
  - does not mutate original array

- ### Array.removeAll (prototype)
  - `predicate: (value: T, index: number, array: Array<T>) => boolean`
  - mutates original array

- ### Array.removeIndex (static)
  - `array: Array<T>`
  - `index: number`
  - returns `Array<T>`
  - does not mutate original array

- ### Array.removeIndex (prototype)
  - `index: number`
  - mutates original array