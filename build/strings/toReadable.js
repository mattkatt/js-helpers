"use strict";
exports.__esModule = true;
var toReadable = function (str) {
    str = str.replace('_', ' ');
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
};
exports["default"] = toReadable;
