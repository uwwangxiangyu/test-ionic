import React, {FC, useMemo} from 'react'
import {IonCheckbox, IonItem, IonLabel} from '@ionic/react'
import {useFormikContext} from "formik";

export interface InputProps {
    name: string;
    label?: string;
}

const CheckBox: FC<InputProps> = ({name, label}) => {
    const {
        setFieldValue,
        values,
    } = useFormikContext<any>()

    const valueSet = useMemo(() => new Set(values[name]), [values[name]])

    return (
        <IonItem>
            {label && (<IonLabel>{label}</IonLabel>)}
            <IonCheckbox
                onIonChange={(e) => {
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
    );
};

export default CheckBox;