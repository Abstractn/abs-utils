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
        return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toUpperCase();
    }
    else {
        return null;
    }
}
export function randomInt(min = 0, max = 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min > max) {
        [min, max] = [max, min];
    }
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
export function createNode(tag, attributes, content, callback) {
    const element = document.createElement(tag);
    if (attributes) {
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }
    if (typeof content === 'string' || typeof content === 'number') {
        element.textContent = content.toString();
    }
    else if (content instanceof HTMLElement) {
        element.appendChild(content);
    }
    else if (Array.isArray(content)) {
        content.forEach(child => {
            (child instanceof HTMLElement) && element.appendChild(child);
        });
    }
    callback === null || callback === void 0 ? void 0 : callback(element);
    return element;
}
export function setStyle(element, property, value) {
    const kebabProperty = property.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    element.style.setProperty(kebabProperty, value);
}
export function setStyles(element, properties) {
    Object.keys(properties).forEach(property => {
        setStyle(element, property, properties[property]);
    });
}
export function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
export function radToDeg(radians) {
    return radians / (Math.PI / 180);
}
export const deepCopy = (src) => {
    const _deepCopy = (src, _seen) => {
        let res;
        const isPrimitive = src === null || typeof src !== 'object';
        const isDate = src instanceof Date;
        const isRegExp = src instanceof RegExp;
        const isArray = Array.isArray(src);
        const isMap = src instanceof Map;
        const isSet = src instanceof Set;
        const isArrayBuffer = src instanceof ArrayBuffer;
        const isTypedArray = ArrayBuffer.isView(src) && !(src instanceof DataView);
        const isDataView = src instanceof DataView;
        const isCircular = !isPrimitive && _seen.has(src);
        if (isPrimitive) {
            res = src;
        }
        else if (isCircular) {
            res = _seen.get(src);
        }
        else if (isDate) {
            res = new Date(src.getTime());
            _seen.set(src, res);
        }
        else if (isRegExp) {
            res = new RegExp(src.source, src.flags);
            _seen.set(src, res);
        }
        else if (isMap) {
            const target = new Map();
            _seen.set(src, target);
            src.forEach((value, key) => {
                target.set(_deepCopy(key, _seen), _deepCopy(value, _seen));
            });
            res = target;
        }
        else if (isSet) {
            const target = new Set();
            _seen.set(src, target);
            src.forEach((value) => {
                target.add(_deepCopy(value, _seen));
            });
            res = target;
        }
        else if (isArrayBuffer) {
            res = src.slice(0);
            _seen.set(src, res);
        }
        else if (isTypedArray) {
            const typedSrc = src;
            const clonedBuffer = _deepCopy(typedSrc.buffer, _seen);
            res = new typedSrc.constructor(clonedBuffer, typedSrc.byteOffset, typedSrc.byteLength / typedSrc.BYTES_PER_ELEMENT);
            _seen.set(src, res);
        }
        else if (isDataView) {
            const dvSrc = src;
            const clonedBuffer = _deepCopy(dvSrc.buffer, _seen);
            res = new DataView(clonedBuffer, dvSrc.byteOffset, dvSrc.byteLength);
            _seen.set(src, res);
        }
        else if (isArray) {
            const target = [];
            _seen.set(src, target);
            src.forEach((item, index) => {
                target[index] = _deepCopy(item, _seen);
            });
            res = target;
        }
        else {
            const target = Object.create(Object.getPrototypeOf(src));
            _seen.set(src, target);
            const stringKeyList = Object.keys(src);
            const symbolKeyList = Object.getOwnPropertySymbols(src).filter((sym) => Object.prototype.propertyIsEnumerable.call(src, sym));
            stringKeyList.forEach((key) => {
                target[key] = _deepCopy(src[key], _seen);
            });
            symbolKeyList.forEach((sym) => {
                target[sym] = _deepCopy(src[sym], _seen);
            });
            res = target;
        }
        return res;
    };
    return _deepCopy(src, new WeakMap());
};
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
    Array.prototype.shuffle = function () {
        let currentIndex = this.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this[currentIndex], this[randomIndex]] = [
                this[randomIndex], this[currentIndex]
            ];
        }
        return this;
    };
    Array.prototype.remove = function (predicate) {
        const itemIndex = this.findIndex(predicate);
        return this.removeIndex(itemIndex);
    };
    Array.prototype.removeAll = function (predicate) {
        for (let i = this.length - 1; i >= 0; i--) {
            predicate(this[i], i, this) && this.splice(i, 1);
        }
        return this;
    };
    Array.prototype.removeIndex = function (index) {
        const isIndexWithinBounds = index >= 0 && index < this.length;
        if (isIndexWithinBounds) {
            this.splice(index, 1);
        }
        return this;
    };
    Array.shuffle = function (array) {
        return deepCopy(array).shuffle();
    };
    Array.remove = function (array, predicate) {
        return deepCopy(array).remove(predicate);
    };
    Array.removeAll = function (array, predicate) {
        return deepCopy(array).removeAll(predicate);
    };
    Array.removeIndex = function (array, index) {
        return deepCopy(array).removeIndex(index);
    };
}
//# sourceMappingURL=abs-utils.js.map