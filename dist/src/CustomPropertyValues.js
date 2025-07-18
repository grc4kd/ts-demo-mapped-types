"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyValuesFormat = void 0;
class CustomPropertyValuesFormat {
    constructor(event) {
        this._scanRepoOld = "";
        this._scanRepoNew = "";
        this._scanRepoOld = event.old_values.scanRepo;
        this._scanRepoNew = event.new_values.scanRepo;
    }
    get oldValues() {
        var _a;
        return JSON.stringify([{ scanRepo: (_a = this._scanRepoOld) !== null && _a !== void 0 ? _a : 'false' }]);
    }
    get newValues() {
        var _a;
        return JSON.stringify([{ scanRepo: (_a = this._scanRepoNew) !== null && _a !== void 0 ? _a : null }]);
    }
}
exports.CustomPropertyValuesFormat = CustomPropertyValuesFormat;
