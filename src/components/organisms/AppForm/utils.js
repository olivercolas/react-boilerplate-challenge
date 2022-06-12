export function getInitialValuesFromFieldsProp(fields) {
    const initialValues = {}

    fields.forEach(field => initialValues[field.name] = field.initialValue)

    return initialValues
}

