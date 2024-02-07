export declare interface ProportionalRangeFunctionConfig {
  oldMin: number; oldMax: number;
  newMin: number; newMax: number;
  value: number;
}
export declare function proportionalRange(config: ProportionalRangeFunctionConfig): number;
export declare function proportionalRange(oldMin: number, oldMax: number, newMin: number, newMax: number, value: number): number;
export declare function rgbToHex(r: number, g: number, b: number): string | null;
export declare function randomInt(min?: number, max?: number): number;
export declare function getNode(query: string, context?: HTMLElement): HTMLElement | null;
export declare function getNodes(query: string, context?: HTMLElement): Array<HTMLElement> | null;
declare global {
  interface Document {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(propertyObject: Record<string, string>): void;
  }
  interface Element {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(propertyObject: Record<string, string>): void;
  }
  interface HTMLElement {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(propertyObject: Record<string, string>): void;
  }
  interface Node {
    getNode(query: string): HTMLElement | null;
    getNodes(query: string): HTMLElement[] | null;
    setStyle(property: string, value: string): void;
    setStyles(propertyObject: Record<string, string>): void;
  }
}
export declare function absPolyfill(): void;