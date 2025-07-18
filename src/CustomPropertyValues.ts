import { CustomPropertyValuesUpdatedEvent } from "../types/custom-property-values.updated";

export class CustomPropertyValuesFormat {
    private _scanRepoOld = "";
    private _scanRepoNew = "";

    constructor(event: CustomPropertyValuesUpdatedEvent) {
        this._scanRepoOld = event.old_values.scanRepo;
        this._scanRepoNew = event.new_values.scanRepo;
    }

    public get oldValues() {
        return JSON.stringify([{scanRepo: this._scanRepoOld ?? 'false'}]);
    }
    public get newValues() {
        return JSON.stringify([{scanRepo: this._scanRepoNew ?? null}]);
    }
}
