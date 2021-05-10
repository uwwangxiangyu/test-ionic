import React from 'react'
import { Formik } from 'formik'

const Form = ({ children, initialValues, onSubmit, innerRef }) => {
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