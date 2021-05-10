import React from 'react'
import { IonItem, IonLabel, IonRadio, IonRadioGroup } from '@ionic/react'
import { useFormikContext } from 'formik'

const RadioInput = ({ name, items }) => {
  const {
    setFieldValue,
    values
  } = useFormikContext()

  return (
    <IonRadioGroup value={values[name]} onIonChange={e => setFieldValue(name, e.detail.value)}>
      {items.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>{item.label}</IonLabel>
          <IonRadio
            slot={'start'}
            color={'success'}
            value={item.value}
          />
        </IonItem>
      ))}
    </IonRadioGroup>
  )
}

export default RadioInput