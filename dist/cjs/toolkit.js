"use strict";
exports.__esModule = true;
function get(object) { }
exports.get = get;
function set(object) { }
exports.set = set;
function merge(object) { }
exports.merge = merge;
function remove(object) { }
exports.remove = remove;
function map(object, fn) {
    var result = {};
    for (var key in object) {
        var transformed = fn(object[key], key, object);
        result[key] = transformed;
    }
    return result;
}
exports.map = map;
function forEach(object, fn) {
    for (var key in object) {
        fn(object[key], key, object);
    }
}
exports.forEach = forEach;
function filter(object, fn) {
    var result = {};
    for (var key in object) {
        var value = object[key];
        var shouldPass = fn(value, key, object);
        if (shouldPass) {
            result[key] = value;
        }
    }
    return result;
}
exports.filter = filter;
function omit(object, keys) {
    var result = {};
    for (var key in object) {
        var shouldOmit = keys.includes(key);
        if (!shouldOmit) {
            result[key] = object[key];
        }
    }
    return result;
}
exports.omit = omit;
function pick(object, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key in object) {
            result[key] = object[key];
        }
    }
    return result;
}
exports.pick = pick;
function split(object, keys) {
    var picked = {};
    var omitted = {};
    for (var key in object) {
        if (keys.includes(key)) {
            picked[key] = object[key];
        }
        else {
            omitted[key] = object[key];
        }
    }
    return [picked, omitted];
}
exports.split = split;
