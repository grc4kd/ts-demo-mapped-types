"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var CustomPropertyValues_js_1 = require("./CustomPropertyValues.js");
var file = './test/fixtures/custom-property-values.updated.json';
fs.readFile(file, 'utf8', function (err, data) {
    var obj = JSON.parse(data);
    function logCustomPropertyValues() {
        // pull some objects out of obj with destructuring
        var action = obj.action;
        // format values into logging class object
        var formatValues = new CustomPropertyValues_js_1.CustomPropertyValuesFormat(obj);
        // interpolate results and return parameter value
        return "complex log string: action ((".concat(action, ")): OLD VALUE(s): ").concat(formatValues.oldValues, " NEW VALUE(s): ").concat(formatValues.newValues);
    }
    if (err) {
        console.error(err);
        return;
    }
    console.log(logCustomPropertyValues());
});
