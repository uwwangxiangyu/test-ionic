import React, {useRef} from 'react'
import {IonContent, IonHeader, IonItemDivider, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Debug.css';
import Form from "../../components/Form/Form";
import {FormikProps} from "formik";
import CheckBox from "../../components/Form/CheckBox";
import Input from "../../components/Form/Input";
import FormButton from "../../components/Form/Button";
import Counter from "../../components/Form/Counter";

export interface InputProps {
    fruit: string;
}

export interface CheckBoxProps {
    fruit: number[]
}

const Debug: React.FC = () => {
    const inputRef = useRef<FormikProps<InputProps>>()
    const checkBoxRef = useRef<FormikProps<CheckBoxProps>>()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonItemDivider/>
                <Form initialValues={{Fruit: ''}} onSubmit={(values: any) => console.log(values)} innerRef={inputRef}>
                    <Input name={'Fruit'} label={'Fruit'}/>
                    <FormButton title={'submit'}/>
                </Form>
                <Form initialValues={{Fruit: []}} onSubmit={(values: any) => console.log(values)}
                      innerRef={checkBoxRef}>
                    <CheckBox name={'Fruit'} label={'Apple'}/>
                    <CheckBox name={'Fruit'} label={'Banana'}/>
                    <CheckBox name={'Fruit'} label={'Pear'}/>
                    <FormButton title={'submit'}/>
                </Form>
                <Form initialValues={{CampaignPhoto: 0}} onSubmit={(values: any) => console.log(values)}
                      innerRef={checkBoxRef}>
                    <Counter name={'CampaignPhoto'} label={'Campaign Photo'}/>
                    <FormButton title={'submit'}/>
                </Form>
            </IonContent>

        </IonPage>
    );
};

export default Debug;
