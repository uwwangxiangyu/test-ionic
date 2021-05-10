import React, {FC} from 'react'
import {IonInput, IonItem, IonLabel} from '@ionic/react'
import {TextFieldTypes} from "@ionic/core";
import {useFormikContext} from "formik";

export interface InputProps {
    name: string;
    label?: string;
    type?: TextFieldTypes;
}

const Input: FC<InputProps> = ({name, label, type}) => {
    const {
        setFieldValue,
        values,
    } = useFormikContext<any>()

    return (
        <IonItem>
            {label && (<IonLabel position="floating">{label}</IonLabel>)}
            <IonInput
                onIonChange={(e) => setFieldValue(name, e.detail.value)}
                value={values[name]}
                title={'ionInput'}
            />
        </IonItem>
    );
};

export default Input;