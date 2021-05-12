import React from 'react'
import { IonItem, IonLabel, IonToggle } from '@ionic/react'
import { useFormikContext } from 'formik'

const Switch = ({ name, label }) => {
  const {
    setFieldValue,
    values
  } = useFormikContext()

  return (
    <IonItem>
      <IonLabel>{label}</IonLabel>
      <IonToggle
        onIonChange={() => {
          setFieldValue(name, !values[name])
        }}
        checked={values[name]}
        mode={'ios'}
      />
    </IonItem>
  )
}

export default Switch