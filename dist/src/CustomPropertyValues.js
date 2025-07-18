"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPropertyValuesFormat = void 0;
class CustomPropertyValuesFormat {
    constructor(event) {
        this._scanRepoOld = "";
        this._scanRepoNew = "";
        this._frameworkOld = "";
        this._frameworkNew = "";
        this._haircutOld = "";
        this._haircutNew = "";
        this._scanRepoOld = event.old_values.scanRepo;
        this._scanRepoNew = event.new_values.scanRepo;
        this._frameworkOld = event.old_values.framework;
        this._frameworkNew = event.new_values.framework;
        this._haircutOld = event.old_values.haircut;
        this._haircutNew = event.new_values.haircut;
    }
    get oldValues() {
        return JSON.stringify([{ scanRepo: this._scanRepoOld, framework: this._frameworkOld, haircut: this._haircutOld }]);
    }
    get newValues() {
        return JSON.stringify([{ scanRepo: this._scanRepoNew, framework: this._frameworkNew, haircut: this._haircutNew }]);
    }
}
exports.CustomPropertyValuesFormat = CustomPropertyValuesFormat;
