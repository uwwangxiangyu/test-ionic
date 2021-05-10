import React, {FC} from 'react'
import {Formik} from 'formik'

export interface InputProps {
    initialValues: any;
    onSubmit: any;
    innerRef?: any;
}

const Form: FC<InputProps> = ({children, initialValues, onSubmit, innerRef}) => {
    return (
        <Formik
            validateOnBlur={false}
            initialValues={initialValues}
            onSubmit={onSubmit}
            innerRef={innerRef}
        >
            <div>
                {children}
            </div>
        </Formik>
    )
}

export default Form