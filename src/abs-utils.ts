export interface ProportionalRangeConfig {
  oldMin: number;
  oldMax: number;
  newMin: number;
  newMax: number;
  value: number;
}

export function proportionalRange(
  oldMin: number, oldMax: number,
  newMin: number, newMax: number,
  value: number
): number;

export function proportionalRange(config: ProportionalRangeConfig): number;

export function proportionalRange(
  oldMinOrConfig: number | ProportionalRangeConfig, oldMax?: number,
  newMin?: number, newMax?: number,
  value?: number
): number {
  const isLinearFunction = (
    typeof oldMinOrConfig === 'number' &&
    typeof oldMax === 'number' &&
    typeof newMin === 'number' &&
    typeof newMax === 'number' &&
    typeof value === 'number'
  );
  if(isLinearFunction) {
    const oldMin = oldMinOrConfig as number;
    return ((newMax - newMin) / (oldMax - oldMin)) * (value - oldMin) + newMin;
  } else if(typeof oldMinOrConfig === 'object') {
    const config = oldMinOrConfig as ProportionalRangeConfig;
    return ((config.newMax - config.newMin) / (config.oldMax - config.oldMin)) * (config.value - config.oldMin) + config.newMin;
  } else {
    return NaN;
  }
}

export function rgbToHex(
  r: number,
  g: number,
  b: number
): string | null {
  const isRedWithinRange   = r > -1 && r < 256;
  const isGreenWithinRange = g > -1 && g < 256;
  const isBlueWithinRange  = b > -1 && b < 256;
  if(isRedWithinRange && isGreenWithinRange && isBlueWithinRange) {
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toUpperCase();
  } else {
    return null;
  }
}

export function randomInt(
  min: number = 0,
  max: number = 1
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNode(
  query: string,
  context?: HTMLElement
): HTMLElement | null {
  if(context) {
    return context.querySelector(query);
  } else {
    return document.querySelector(query);
  }
}

export function getNodes(
  query: string,
  context?: HTMLElement
): Array<HTMLElement> | null {
  if(context) {
    const res: Array<HTMLElement> = Array.from(context.querySelectorAll(query));
    return res.length ? res : null;
  } else {
    const res: Array<HTMLElement> = Array.from(document.querySelectorAll(query));
    return res.length ? res : null;
  }
}

export function createNode(
  tag: string,
  attributes?: Record<string, string>,
  content?: string | number | HTMLElement | Array<HTMLElement>,
  callback?: ((element: HTMLElement) => void)
): HTMLElement {
  const element = document.createElement(tag);

  if(attributes) {
    for(const key in attributes) {
      if(attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
  }

  if(typeof content === 'string' || typeof content === 'number') {
    element.textContent = content.toString();
  } else if(content instanceof HTMLElement) {
    element.appendChild(content);
  } else if(Array.isArray(content)) {
    content.forEach(child => {
      (child instanceof HTMLElement) && element.appendChild(child);
    });
  }

  callback?.(element);

  return element;
}

export function setStyle(element: HTMLElement, property: string, value: string): void {
  const kebabProperty = property.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
  element.style.setProperty(kebabProperty, value);
}

export function setStyles(element: HTMLElement, properties: Record<string, string>): void {
  Object.keys(properties).forEach(property => {
    setStyle(element, property, properties[property]);
  });
}

export function degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function radToDeg(radians: number): number {
  return radians / (Math.PI / 180);
}

export const deepCopy = <T>(src: T): T => {
  const _deepCopy = <U>(src: U, _seen: WeakMap<object, unknown>): U => {
    let res: U;
    
    const isPrimitive = src === null || typeof src !== 'object';
    const isDate = src instanceof Date;
    const isRegExp = src instanceof RegExp;
    const isArray = Array.isArray(src);
    const isMap = src instanceof Map;
    const isSet = src instanceof Set;
    const isArrayBuffer = src instanceof ArrayBuffer;
    const isTypedArray = ArrayBuffer.isView(src) && !(src instanceof DataView);
    const isDataView = src instanceof DataView;
    const isCircular = !isPrimitive && _seen.has(src as object);
    
    if(isPrimitive) {
      res = src;
    } else if(isCircular) {
      res = _seen.get(src as object) as U;
    } else if(isDate) {
      res = new Date(src.getTime()) as U;
      _seen.set(src as object, res);
    } else if(isRegExp) {
      res = new RegExp(src.source, src.flags) as U;
      _seen.set(src as object, res);
    } else if(isMap) {
      const target = new Map();
      _seen.set(src as object, target);

      (src as Map<unknown, unknown>).forEach((value, key) => {
        target.set(_deepCopy(key, _seen), _deepCopy(value, _seen));
      });

      res = target as U;
    } else if(isSet) {
      const target = new Set();
      _seen.set(src as object, target);

      (src as Set<unknown>).forEach((value) => {
        target.add(_deepCopy(value, _seen));
      });

      res = target as U;
    } else if(isArrayBuffer) {
      res = (src as ArrayBuffer).slice(0) as U;
      _seen.set(src as object, res);
    } else if(isTypedArray) {
      const typedSrc = src as unknown as { constructor: new (buffer: ArrayBuffer, byteOffset: number, length: number) => U, buffer: ArrayBuffer, byteOffset: number, byteLength: number, BYTES_PER_ELEMENT: number };
      const clonedBuffer = _deepCopy(typedSrc.buffer, _seen);
      res = new typedSrc.constructor(clonedBuffer, typedSrc.byteOffset, typedSrc.byteLength / typedSrc.BYTES_PER_ELEMENT);
      _seen.set(src as object, res);
    } else if(isDataView) {
      const dvSrc = src as unknown as DataView;
      const clonedBuffer = _deepCopy(dvSrc.buffer, _seen);
      res = new DataView(clonedBuffer, dvSrc.byteOffset, dvSrc.byteLength) as U;
      _seen.set(src as object, res);
    } else if(isArray) {
      const target: any[] = [];
      _seen.set(src as object, target);

      src.forEach((item, index) => {
        target[index] = _deepCopy(item, _seen);
      });

      res = target as U;
    } else {
      const target: any = Object.create(Object.getPrototypeOf(src));
      _seen.set(src as object, target);
      const stringKeyList = Object.keys(src as object);
      const symbolKeyList = Object.getOwnPropertySymbols(src as object).filter(
        (sym) => Object.prototype.propertyIsEnumerable.call(src, sym),
      );

      stringKeyList.forEach((key) => {
        target[key] = _deepCopy((src as Record<string, unknown>)[key], _seen);
      });

      symbolKeyList.forEach((sym) => {
        target[sym] = _deepCopy((src as Record<symbol, unknown>)[sym], _seen);
      });

      res = target as U;
    }
    
    return res;
  };

  return _deepCopy(src, new WeakMap());
};

//TODO define `Array.shuffle`

declare global {
  interface Document {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(properties: Record<string, string>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Element {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(properties: Record<string, string>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface HTMLElement {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(properties: Record<string, string>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Node {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(properties: Record<string, string>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Math {
    randomInt(min: number, max: number): number;
    degToRad(degrees: number): number;
    radToDeg(radians: number): number;
  }
}

export function absPolyfill(): void {
  [Document, Element, HTMLElement, Node].forEach(NativeClass => {
    NativeClass.prototype.getNode = function (query: string) {
      return getNode(query, this);
    };
    
    NativeClass.prototype.getNodes = function (query: string) {
      return getNodes(query, this);
    };
    
    NativeClass.prototype.setStyle = function (property: string, value: string) {
      return setStyle(this, property, value);
    };
    
    NativeClass.prototype.setStyles = function (properties: Record<string, string>) {
      return setStyles(this, properties);
    };

    NativeClass.prototype.on = function (eventType: string, callback: EventListenerOrEventListenerObject) {
      return this.addEventListener(eventType, callback);
    };

    NativeClass.prototype.off = function (eventType: string, callback: EventListenerOrEventListenerObject) {
      return this.removeEventListener(eventType, callback);
    };

    NativeClass.prototype.attr = function (attributeName: string, value?: string): string | undefined {
      if(typeof value !== 'undefined') {
        this.setAttribute(attributeName, value);
        return;
      } else {
        return this.getAttribute(attributeName);
      }
    };
  });
  Math.randomInt = function (min: number, max: number): number { return randomInt(min, max); };
  Math.degToRad = function (degrees: number): number { return degToRad(degrees); };
  Math.radToDeg = function (radians: number): number { return radToDeg(radians); };
}
