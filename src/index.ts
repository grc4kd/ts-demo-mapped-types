import * as fs from 'node:fs';
import { CustomPropertyValuesUpdatedEvent } from '../types/custom-property-values.updated.js';
import { CustomPropertyValuesFormat } from './CustomPropertyValues.js';

const file = './test/fixtures/custom-property-values.updated.json';

function printCustomPropertyValues(obj: CustomPropertyValuesUpdatedEvent): string {
    // pull some objects out of obj with destructuring
    const { action } = obj;

    // format values into logging class object
    const formatValues = new CustomPropertyValuesFormat(obj);

    // interpolate results and return parameter value
    return `complex log string: action ((${action})): OLD VALUE(s): ${formatValues.oldValues} NEW VALUE(s): ${formatValues.newValues}`;
}

fs.readFile(file, 'utf8', (err, data) => {
    const obj = JSON.parse(data);

    if (err) {
        console.error(err);
        return;
    }

    console.log(printCustomPropertyValues(obj));
});

