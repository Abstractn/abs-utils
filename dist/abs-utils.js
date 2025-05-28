export function proportionalRange(oldMinOrConfig, oldMax, newMin, newMax, value) {
    const isLinearFunction = (typeof oldMinOrConfig === 'number' &&
        typeof oldMax === 'number' &&
        typeof newMin === 'number' &&
        typeof newMax === 'number' &&
        typeof value === 'number');
    if (isLinearFunction) {
        const oldMin = oldMinOrConfig;
        return ((newMax - newMin) / (oldMax - oldMin)) * (value - oldMin) + newMin;
    }
    else if (typeof oldMinOrConfig === 'object') {
        const config = oldMinOrConfig;
        return ((config.newMax - config.newMin) / (config.oldMax - config.oldMin)) * (config.value - config.oldMin) + config.newMin;
    }
    else {
        return NaN;
    }
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
export function setStyle(element, property, value) {
    element.style[property] = value;
}
export function setStyles(element, properties) {
    Object.keys(properties).forEach(property => {
        element.style[property] = properties[property];
    });
}
export function degToRad(degrees) {
    return degrees * (this.PI / 180);
}
;
export function radToDeg(radians) {
    return radians / (this.PI / 180);
}
;
export function absPolyfill() {
    [Document, Element, HTMLElement, Node].forEach(NativeClass => {
        NativeClass.prototype.getNode = function (query) {
            return getNode(query, this);
        };
        NativeClass.prototype.getNodes = function (query) {
            return getNodes(query, this);
        };
        NativeClass.prototype.setStyle = function (property, value) {
            return setStyle(this, property, value);
        };
        NativeClass.prototype.setStyles = function (properties) {
            return setStyles(this, properties);
        };
        NativeClass.prototype.on = function (eventType, callback) {
            return this.addEventListener(eventType, callback);
        };
        NativeClass.prototype.off = function (eventType, callback) {
            return this.removeEventListener(eventType, callback);
        };
        NativeClass.prototype.attr = function (attributeName, value) {
            if (typeof value !== 'undefined') {
                this.setAttribute(attributeName, value);
                return;
            }
            else {
                return this.getAttribute(attributeName);
            }
        };
    });
    Math.randomInt = function (min, max) { return randomInt(min, max); };
    Math.degToRad = function (degrees) { return degToRad(degrees); };
    Math.radToDeg = function (radians) { return radToDeg(radians); };
}
//# sourceMappingURL=abs-utils.js.map