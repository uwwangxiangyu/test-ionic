import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const Register = () => {
  return (
    <IonPage>
      <Header title={'Register'}/>
      <IonContent fullscreen>
        <p>This is the login page!</p>
      </IonContent>
    </IonPage>
  )
}

export default Register
