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
    return ((r << 16) | (g << 8) | b).toString(16).toUpperCase();
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

export function setStyle <K extends keyof CSSStyleDeclaration> (element: HTMLElement, property: K, value: CSSStyleDeclaration[K]): void {
  element.style[property] = value;
}

export function setStyles <K extends keyof CSSStyleDeclaration> (element: HTMLElement, properties: Record<K, CSSStyleDeclaration[K]>): void {
  Object.keys(properties).forEach(property => {
    element.style[(property as K)] = properties[(property as K)];
  });
}

//TODO define `deepCopy`

//TODO define `Array.shuffle`

declare global {
  interface Document {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Element {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface HTMLElement {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Node {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: string, callback: EventListenerOrEventListenerObject): void;
    off(eventType: string, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
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
    
    NativeClass.prototype.setStyle = function <K extends keyof CSSStyleDeclaration> (property: K, value: CSSStyleDeclaration[K]) {
      return setStyle(this, property, value);
    };
    
    NativeClass.prototype.setStyles = function <K extends keyof CSSStyleDeclaration> (properties: Record<K, CSSStyleDeclaration[K]>) {
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
}