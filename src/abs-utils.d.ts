export interface ProportionalRangeConfig {
  oldMin: number;
  oldMax: number;
  newMin: number;
  newMax: number;
  value: number;
}
export declare function proportionalRange(oldMin: number, oldMax: number, newMin: number, newMax: number, value: number): number;
export declare function proportionalRange(config: ProportionalRangeConfig): number;
export declare function rgbToHex(r: number, g: number, b: number): string | null;
export declare function randomInt(min?: number, max?: number): number;
export declare function degToRad(degrees: number): number;
export declare function radToDeg(radians: number): number;
export declare function getNode(query: string, context?: HTMLElement): HTMLElement | null;
export declare function getNodes(query: string, context?: HTMLElement): Array<HTMLElement> | null;
export declare function setStyle(element: HTMLElement, property: string, value: string): void;
export declare function setStyles(element: HTMLElement, properties: Record<string, string>): void;
export declare function deepCopy<T>(src: T): T;
export declare function createNode(
  tag: string,
  attributes?: Record<string, string>,
  content?: string | number | HTMLElement | Array<HTMLElement>,
  callback?: ((element: HTMLElement) => void)
): HTMLElement;
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

  interface Array<T> {
    shuffle(): Array<T>;
    remove(predicate: (item: T) => boolean): Array<T>;
    removeAll(predicate: (item: T) => boolean): Array<T>;
    removeIndex(index: number): Array<T>;
  }

  interface ArrayConstructor {
    shuffle<T>(array: Array<T>): Array<T>;
    remove<T>(array: Array<T>, predicate: (item: T) => boolean): Array<T>;
    removeAll<T>(array: Array<T>, predicate: (item: T) => boolean): Array<T>;
    removeIndex<T>(array: Array<T>, index: number): Array<T>;
  }
}
export declare function absPolyfill(): void;