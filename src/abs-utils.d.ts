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
export declare function getNode(query: string, context?: HTMLElement): HTMLElement | null;
export declare function getNodes(query: string, context?: HTMLElement): Array<HTMLElement> | null;
export declare function setStyle<K extends keyof CSSStyleDeclaration>(element: HTMLElement, property: K, value: CSSStyleDeclaration[K]): void;
export declare function setStyles<K extends keyof CSSStyleDeclaration>(element: HTMLElement, properties: Record<K, CSSStyleDeclaration[K]>): void;
declare global {
  interface Document {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    off(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Element {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    off(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface HTMLElement {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    off(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
  interface Node {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle<K extends keyof CSSStyleDeclaration>(property: K, value: CSSStyleDeclaration[K]): void;
    setStyles<K extends keyof CSSStyleDeclaration>(properties: Record<K, CSSStyleDeclaration[K]>): void;
    on(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    off(eventType: keyof ElementEventMap, callback: EventListenerOrEventListenerObject): void;
    attr(attributeName: string, value?: string): string | undefined;
  }
}
export declare function absPolyfill(): void;