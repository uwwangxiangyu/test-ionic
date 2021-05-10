import React from 'react'
import { useFormikContext } from 'formik'
import { IonButton } from '@ionic/react'

const FormButton = ({ title }) => {
  const { handleSubmit } = useFormikContext()

  return <IonButton color="primary" expand="block" onClick={() => handleSubmit()}>{title}</IonButton>
}

export default FormButton
