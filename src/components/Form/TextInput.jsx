import React from 'react'
import { IonInput, IonItem, IonLabel } from '@ionic/react'
import { useFormikContext } from 'formik'

const TextInput = ({ name, label, type }) => {
  const {
    setFieldValue,
    values
  } = useFormikContext()

  return (
    <IonItem style={{ width: '100%' }}>
      {label && (<IonLabel position="floating">{label}</IonLabel>)}
      <IonInput
        onIonChange={(e) => setFieldValue(name, e.detail.value)}
        value={values[name]}
        title={'ionInput'}
        type={type}
        style={{ width: '100%' }}
      />
    </IonItem>
  )
}

export default TextInput