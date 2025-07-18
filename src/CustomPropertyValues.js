"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyValuesFormat = void 0;
var CustomPropertyValuesFormat = /** @class */ (function () {
    function CustomPropertyValuesFormat(event) {
        this._scanRepoOld = "";
        this._scanRepoNew = "";
        this._scanRepoOld = event.old_values.scanRepo;
        this._scanRepoNew = event.new_values.scanRepo;
    }
    Object.defineProperty(CustomPropertyValuesFormat.prototype, "oldValues", {
        get: function () {
            var _a;
            return JSON.stringify([{ scanRepo: (_a = this._scanRepoOld) !== null && _a !== void 0 ? _a : 'false' }]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomPropertyValuesFormat.prototype, "newValues", {
        get: function () {
            var _a;
            return JSON.stringify([{ scanRepo: (_a = this._scanRepoNew) !== null && _a !== void 0 ? _a : null }]);
        },
        enumerable: false,
        configurable: true
    });
    return CustomPropertyValuesFormat;
}());
exports.CustomPropertyValuesFormat = CustomPropertyValuesFormat;
