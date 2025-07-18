type Features = {
    scan_repo: () => void;
    framework: () => void;
    haircut: () => void;
}

type CustomPropertyOptionsFlags<Type> = {
    [Property in keyof Type]: string
};

export type CustomPropertyValuesUpdatedEvent =
    {
        action: string,
        old_values: CustomPropertyOptionsFlags<Features>,
        new_values: CustomPropertyOptionsFlags<Features>
    }