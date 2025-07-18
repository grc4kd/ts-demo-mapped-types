"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyValuesFormat = void 0;
class CustomPropertyValuesFormat {
    constructor(event) {
        var _a, _b, _c, _d, _e, _f;
        this._scanRepoOld = "";
        this._scanRepoNew = "";
        this._frameworkOld = "";
        this._frameworkNew = "";
        this._haircutOld = "";
        this._haircutNew = "";
        this._scanRepoOld = (_a = event.old_values.scanRepo) !== null && _a !== void 0 ? _a : 'false';
        this._scanRepoNew = (_b = event.new_values.scanRepo) !== null && _b !== void 0 ? _b : 'false';
        this._frameworkOld = (_c = event.old_values.framework) !== null && _c !== void 0 ? _c : 'false';
        this._frameworkNew = (_d = event.new_values.framework) !== null && _d !== void 0 ? _d : 'false';
        this._haircutOld = (_e = event.old_values.haircut) !== null && _e !== void 0 ? _e : 'false';
        this._haircutNew = (_f = event.new_values.haircut) !== null && _f !== void 0 ? _f : 'false';
    }
    get oldValues() {
        return JSON.stringify([{ scanRepo: this._scanRepoOld, framework: this._frameworkOld, haircut: this._haircutOld }]);
    }
    get newValues() {
        return JSON.stringify([{ scanRepo: this._scanRepoNew, framework: this._frameworkNew, haircut: this._haircutNew }]);
    }
}
exports.CustomPropertyValuesFormat = CustomPropertyValuesFormat;
