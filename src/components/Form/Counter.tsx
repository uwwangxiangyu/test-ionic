import React, {FC} from 'react'
import {IonIcon, IonInput, IonItem, IonLabel} from '@ionic/react'
import {useFormikContext} from "formik";
import {addCircleOutline, removeCircleOutline} from "ionicons/icons";

export interface CounterProps {
    name: string;
    label?: string;
}

const Counter: FC<CounterProps> = ({name, label}) => {
    const {
        setFieldValue,
        values,
    } = useFormikContext<any>()

    return (
        <IonItem>
            <IonLabel>{label}</IonLabel>
            <IonItem>
                <IonInput type={'number'} value={values[name]}/>
                <IonIcon icon={removeCircleOutline} onClick={() => setFieldValue(name, Math.max(values[name] - 1, 0))}
                         slot={'start'} title={'counterIncrement'}/>
                <IonIcon icon={addCircleOutline} onClick={() => setFieldValue(name, Math.max(values[name] + 1, 0))}
                         slot={'end'} title={'counterDecrement'}/>
            </IonItem>
        </IonItem>
    );
};

export default Counter;