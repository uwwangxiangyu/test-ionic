import React, {FC} from 'react'
import {useFormikContext} from 'formik'
import {IonButton} from "@ionic/react";

export interface ButtonProps {
    title: string;
}

const FormButton: FC<ButtonProps> = ({title}) => {
    const {handleSubmit} = useFormikContext()

    return <IonButton color="primary" expand="block" onClick={() => handleSubmit()}>{title}</IonButton>
}

export default FormButton
