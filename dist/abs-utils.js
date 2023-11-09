export function proportionalRange(oldMin, oldMax, newMin, newMax, value) {
    return ((newMax - newMin) / (oldMax - oldMin)) * (value - oldMin) + newMin;
}
export function rgbToHex(r, g, b) {
    const isRedWithinRange = r > -1 && r < 256;
    const isGreenWithinRange = g > -1 && g < 256;
    const isBlueWithinRange = b > -1 && b < 256;
    if (isRedWithinRange && isGreenWithinRange && isBlueWithinRange) {
        return ((r << 16) | (g << 8) | b).toString(16).toUpperCase();
    }
    else {
        return null;
    }
}
export function randomInt(min = 0, max = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getNode(query, context) {
    if (context) {
        return context.querySelector(query);
    }
    else {
        return document.querySelector(query);
    }
}
export function getNodes(query, context) {
    if (context) {
        const res = Array.from(context.querySelectorAll(query));
        return res.length ? res : null;
    }
    else {
        const res = Array.from(document.querySelectorAll(query));
        return res.length ? res : null;
    }
}
export function absPolyfill() {
    [Document, Element, HTMLElement, Node].forEach(NativeClass => {
        NativeClass.prototype.getNode = function (query) { return getNode(query, this); };
        NativeClass.prototype.getNodes = function (query) { return getNodes(query, this); };
        NativeClass.prototype.setStyle = function (property, value) { this.style[property] = value; };
        NativeClass.prototype.setStyles = function (propertyObject) {
            Object.keys(propertyObject).forEach(property => {
                this.style[property] = propertyObject[property];
            });
        };
    });
}
//# sourceMappingURL=abs-utils.js.map