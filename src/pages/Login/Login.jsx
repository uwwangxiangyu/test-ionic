import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/Header'

const Login = () => {
  return (
    <IonPage>
      <Header title={'Login'}/>
      <IonContent fullscreen>
        <p>This is the login page!</p>
      </IonContent>
    </IonPage>
  )
}

export default Login
