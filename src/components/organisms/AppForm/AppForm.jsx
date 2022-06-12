import PropTypes from "prop-types";
import {Form, Formik} from 'formik'

import {directionChoices} from "../../../utils/props";
import {getInitialValuesFromFieldsProp} from "./utils";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import FormError from "../../organisms/AppForm/components/FormError";
import FormField from "./components/FormField";

const AppForm = ({
    fields,
    direction,
    submitText,
    ...formikProps
}) => {
    const initialValues = getInitialValuesFromFieldsProp(fields)

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur={false}
            validateOnChange={false}
            {...formikProps}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Box space="4" gap="2" direction={direction}>
                        {fields.map(field => (
                            <Box direction="column" key={field.name}>
                                <FormField type={field.type} name={field.name} />
                                <FormError name={field.name} />
                            </Box>
                        ))}
                        <Button type="submit" disabled={isSubmitting}>{ submitText }</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}

AppForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    submitText: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(directionChoices),
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object
}

AppForm.defaulProps = {
    direction: 'column'
}

export default AppForm
