import React, { useMemo } from 'react'
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react'
import { useFormikContext } from 'formik'

const CheckBox = ({ name, label }) => {
  const {
    setFieldValue,
    values
  } = useFormikContext()

  const valueSet = useMemo(() => new Set(values[name]), [values[name]])

  return (
    <IonItem>
      {label && (<IonLabel>{label}</IonLabel>)}
      <IonCheckbox
        onIonChange={() => {
          if (valueSet.has(label)) {
            valueSet.delete(label)
          } else {
            valueSet.add(label)
          }
          setFieldValue(name, Array.from(valueSet))
        }}
        checked={valueSet.has(label)}
        slot="start"
      />
    </IonItem>
  )
}

export default CheckBox