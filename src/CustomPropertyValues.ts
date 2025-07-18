import { CustomPropertyValuesUpdatedEvent } from "../types/custom-property-values.updated";

export class CustomPropertyValuesFormat {
    private _scanRepoOld = "";
    private _scanRepoNew = "";
    private _frameworkOld = "";
    private _frameworkNew = "";
    private _haircutOld = "";
    private _haircutNew = "";

    constructor(event: CustomPropertyValuesUpdatedEvent) {
        this._scanRepoOld = event.old_values.scanRepo;
        this._scanRepoNew = event.new_values.scanRepo;
        this._frameworkOld = event.old_values.framework;
        this._frameworkNew = event.new_values.framework;
        this._haircutOld = event.old_values.haircut;
        this._haircutNew = event.new_values.haircut;
    }

    public get oldValues() {
        return JSON.stringify([{scanRepo: this._scanRepoOld, framework: this._frameworkOld, haircut: this._haircutOld }]);
    }
    public get newValues() {
        return JSON.stringify([{scanRepo: this._scanRepoNew, framework: this._frameworkNew, haircut: this._haircutNew }]);
    }
}
