import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Home.css'
import React from 'react'
import Header from '../../components/Header'

const Home = ({ history }) => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
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
