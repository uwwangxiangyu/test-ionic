import React, { useRef } from 'react'
import { IonContent, IonItem, IonList, IonPage } from '@ionic/react'
import './Debug.module.css'
import Form from '../../components/Form/Form'
import CheckBox from '../../components/Form/CheckBox'
import TextInput from '../../components/Form/TextInput'
import FormButton from '../../components/Form/Button'
import Counter from '../../components/Form/Counter'
import RadioInput from '../../components/Form/RadioInput'
import Switch from '../../components/Form/Switch'
import Header from '../../components/Header'
import styles from './Debug.module.css'

const Debug = () => {
  const inputRef = useRef()
  const checkBoxRef = useRef()
  const radioRef = useRef()
  const switchRef = useRef()

  return (
    <IonPage>
      <Header title={'Debug'}/>
      <IonContent fullscreen>
        <IonList>
          <IonItem className={styles.item}>
            <Form initialValues={{ Fruit: '' }} onSubmit={(values) => console.log(values)} innerRef={inputRef}>
              <TextInput name={'Fruit'} label={'Fruit'}/>
              <FormButton title={'submit'}/>
            </Form>
          </IonItem>
          <IonItem className={styles.item}>
            <Form initialValues={{ Fruit: [] }} onSubmit={(values) => console.log(values)} innerRef={checkBoxRef}>
              <CheckBox name={'Fruit'} label={'Apple'}/>
              <CheckBox name={'Fruit'} label={'Banana'}/>
              <CheckBox name={'Fruit'} label={'Pear'}/>
              <FormButton title={'submit'}/>
            </Form>
          </IonItem>
          <IonItem className={styles.item}>
            <Form initialValues={{ CampaignPhoto: 0 }} onSubmit={(values) => console.log(values)} innerRef={checkBoxRef}>
              <Counter name={'CampaignPhoto'} label={'Campaign Photo'}/>
              <FormButton title={'submit'}/>
            </Form>
          </IonItem>
          <IonItem className={styles.item}>
            <Form initialValues={{ Fruit: 0 }} onSubmit={(values) => console.log(values)} innerRef={radioRef}>
              <RadioInput name={'Fruit'} items={[
                { label: 'Apple', value: 'apple' },
                { label: 'Banana', value: 'banana' },
                { label: 'Pear', value: 'pear' },
                { label: 'Cherry', value: 'cherry' }
              ]}/>
              <FormButton title={'submit'}/>
            </Form>
          </IonItem>
          <IonItem className={styles.item}>
            <Form initialValues={{ Apple: false }} onSubmit={(values) => console.log(values)} innerRef={switchRef}>
              <Switch name={'Apple'} label={'Apple'}/>
              <FormButton title={'submit'}/>
            </Form>
          </IonItem>
        </IonList>
      </IonContent>

    </IonPage>
  )
}

export default Debug
