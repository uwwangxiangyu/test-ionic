import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Home.css'
import React from 'react'
import Header from '../../components/Header'

const Home = ({ history }) => {
  return (
    <IonPage>
      <Header title={'Home'}/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonButton onClick={e => {
            e.preventDefault()
            history.push('/login')
          }}>
            <IonLabel>Login</IonLabel>
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton onClick={e => {
            e.preventDefault()
            history.push('/Register')
          }}>
            <IonLabel>Register</IonLabel>
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton onClick={e => {
            e.preventDefault()
            history.push('/debug')
          }}>
            <IonLabel>Debug</IonLabel>
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Home
